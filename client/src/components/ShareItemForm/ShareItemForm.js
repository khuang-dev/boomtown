import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles } from '@material-ui/core/';
import { Form, Field, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { ItemPreviewContext } from '../../context/ItemPreviewProvider'
import { ADD_ITEM_MUTATION } from '../../apollo/queries';
import { Mutation } from 'react-apollo'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

class ShareForm extends Component {
  onSubmit = (values) => {
    // console.log(values);
  };
  generateTagsText = (tags, selected) => {
    return tags
      .map(t => (selected.indexOf(t.id) > -1 ? t.title : false))
      .filter(e => e)
      .join(", ");
  };
  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
      });
      return updatedTag;
    });
  };
  dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: this.applyTags(values.tags || [], allTags)
    });
  };
  render() {
    const { classes, tags } = this.props;
    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview }) => (
          <Mutation mutation={ADD_ITEM_MUTATION}>
            {addItem => {
              return (
                <div className={classes.shareformcontainer}>
                  <Form
                    onSubmit={async values => {
                      console.log(values)
                      await addItem({
                        variables: {
                          item: {
                            ...values,
                            tags: this.applyTags(values.tags || [], this.props.tags)
                          }
                        }
                      })
                    }}
                    render={({ handleSubmit, pristine }) => {
                      return (
                        <form onSubmit={handleSubmit}>
                          <FormSpy
                            subscription={{ values: true }}
                            onChange={({ values }) => {
                              if (values) {
                                this.dispatchUpdate(values, this.props.tags, updatePreview);
                              }
                              return "";
                            }}
                          />
                          <Typography className={classes.title}>Share. Borrow. Prosper.</Typography>
                          <Button fullWidth className={classes.button}>SHARE AN IMAGE</Button>
                          <Field name="title" render={({ input, meta }) => (
                            <TextField {...input} fullWidth className={classes.textFields} placeholder="Name your item" />
                          )} />
                          <Field name="description" render={({ input, meta }) => (
                            <TextField {...input} fullWidth className={classes.textFields} placeholder="Describe your item" />
                          )} />
                          <label className={classes.tagIcons}>
                            <Field name="tags" component="input" type="checkbox" value="household items" />
                            Household Items <HomeIcon />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field name="tags" component="input" type="checkbox" value="tools" />
                            Tools <HomeIcon />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field name="tags" component="input" type="checkbox" value="electronics" />
                            Electronics <HomeIcon />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field name="tags" component="input" type="checkbox" value="physical media" />
                            Physical Media <HomeIcon />
                          </label>
                          <label className={classes.tagIcons}>
                            <Field name="tags" component="input" type="checkbox" value="sporting goods" />
                            Sporting Goods <HomeIcon />
                          </label>
                          <div>
                            <Button type="submit" className={classes.share}>
                              {/* disabled={pristine} */}
                              Share
                </Button>
                          </div>
                        </form>);
                    }} />

                </div>
              )
            }}
          </Mutation>
        )}
      </ItemPreviewContext.Consumer>
    )
  }
}
export default withStyles(styles)(ShareForm);
