function tagsQueryString(tags, itemid, result) {
  for (i = tags.length; i > 0; i--) {
    result += `($${i}, ${itemid}),`;
  }
  return result.slice(0, -1) + ";";
}

module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text: "", // @TODO: Authentication - Server
        values: [fullname, email, password],
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw "An account with this username already exists.";
          case /users_email_key/.test(e.message):
            throw "An account with this email already exists.";
          default:
            throw "There was a problem creating your account.";
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: "", // @TODO: Authentication - Server
        values: [email],
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found.";
        return user.rows[0];
      } catch (e) {
        throw "User was not found.";
      }
    },
    async getUserById(id) {
      try {

        const findUserQuery = {
          text: `SELECT id, fullname, email, bio FROM users WHERE id = $1`,
          values: [id],
        };

        const user = await postgres.query(findUserQuery);
        // if (!user) throw "User is not found";
        // if (!password) throw "User or Password incorrect";
        return user.rows[0];
      } catch (e) {
        throw "User is not found";
      }
    },
    async getItems(idToOmit) {
      try {
        const items = await postgres.query({
          text: `SELECT * FROM items WHERE ownerid != $1`,
          values: idToOmit ? [idToOmit] : [],
        });
        return items.rows;
      } catch (e) {
        throw e
      }
    },
    async getItemsForUser(id) {
      try {
        const items = await postgres.query({
          text: `SELECT * FROM items WHERE ownerid = $1`,
          values: [id],
        });
        return items.rows;
      } catch (e) {
        throw e
      }
    },
    async getBorrowedItemsForUser(id) {
      try {
        const items = await postgres.query({
          text: `SELECT * FROM items WHERE borrowerid = $1`,
          values: [id],
        });
        return items.rows;
      } catch (e) {
        throw e
      }
    },
    async getTags() {
      try {
        const tags = await postgres.query(`SELECT * FROM tags`);
        return tags.rows;
      } catch (e) {
        throw e
      }
    },
    async getTagsForItem(id) {
      try {
        const tagsQuery = {
          text: `SELECT * FROM tags INNER JOIN itemtags ON tags.id = itemid WHERE itemid = $1;`, // @TODO: Advanced query Hint: use INNER JOIN
          values: [id],
        };
        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      } catch (e) {
        throw e
      }
    },
    async saveNewItem({ item, user }) {

      return new Promise((resolve, reject) => {

        postgres.connect((err, client, done) => {
          try {

            client.query("BEGIN", async err => {
              const { title, description, tags } = item;

              const newItemQuery = {
                text: `INSERT INTO items(title, description, ownerid) VALUES($1, $2, $3) RETURNING *`,
                values: [title, description, user],
              }

              const newItem = await postgres.query(newItemQuery);
              let itemid = newItem.rows[0].id;
              let results = [];

              const tagRelationshipQuery = {
                text: `INSERT INTO itemtags(tagid,itemid) VALUES
                ${tagsQueryString([...tags], itemid, results)}`,
                values: tags.map(tag => tag.id),
              };
              console.log(tagsQueryString([...tags], itemid, results));


              const insertTagRelationship = await postgres.query(tagRelationshipQuery);

              client.query("COMMIT", err => {
                if (err) {
                  throw err;
                }
                done();
                resolve(newItem.rows[0]);
              });
            });
          } catch (e) {
            client.query("ROLLBACK", err => {
              if (err) {
                throw err;
              }
              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    },
  };
};
