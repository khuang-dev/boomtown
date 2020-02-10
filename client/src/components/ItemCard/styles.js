const styles = ({ theme }) => {
    return {
        card: {
            minWidth: 400,
            height: 550,
            margin: "10px 10px 10px 10px",
            backgroundColor: "#fff",
            borderRadius: "0",
        },
        cardcontent: {
            background: "#fff",
        },
        media: {
            height: 250,
            backgroundColor: "gray"
        },
        username: {
        },
        cardtitle: {
            color: "#212121",
            fontSize: "25px"
        },
        carddescription: {
            color: "#212121",
            fontSize: "14px"
        },
        itemmeta: {
            marginTop: "30px"
        },
        usermeta: {
            display: "flex"
        },
        avatar: {
            width: "50px",
            height: "50px",
            marginRight: "20px",
            borderRadius: "50px"
        },
        day: {
            color: "rgba(0, 0, 0, 0.5)",
            fontSize: "14px"
        },
        tags: {
            color: "rgba(0, 0, 0, 0.5)",
            fontSize: "14px",
            margin: "10px 0"
        },
        tagscontainer: {
            display: "flex",
        },
        button: {
            color: "#212121",
            border: "1px solid rgba(0, 0, 0, 0.23)",
            padding: "8px 24px",
            margin: "0 0 12px 8px"
        }
    }
}

export default styles;