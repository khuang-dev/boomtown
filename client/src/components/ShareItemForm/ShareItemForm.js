import React, { Component } from 'react';
import styles from './styles';
import { Form, Field, FormSpy } from 'react-final-form';
import { HomeOutlined } from '@material-ui/icons/'
import { BookOutlined } from '@material-ui/icons/'
import { MusicNoteOutlined } from '@material-ui/icons/'
import { DevicesOutlined } from '@material-ui/icons/'
import { BuildOutlined } from '@material-ui/icons/'
import { InsertEmoticonOutlined } from '@material-ui/icons/'
import { ItemPreviewContext } from '../../context/ItemPreviewProvider'
import { ADD_ITEM_MUTATION } from '../../apollo/queries';
import { Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import {
  withStyles,
  Button,
  TextField,
  Typography
} from '@material-ui/core/';



class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onSubmit = (values) => {
    console.log(values);
  };

  validate = (values) => {
    console.log(values)
    const errors = {}; //meta access here
    if (!values.title) {
      errors.title = 'Required*'
    }
    if (!values.description) {
      errors.description = 'Required*'
    }
    return errors;
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
    const { classes } = this.props;
    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview }) => (
          <Mutation mutation={ADD_ITEM_MUTATION}>
            {addItem => {
              return (
                <div className={classes.shareformcontainer}>
                  <Form
                    validate={this.validate}
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
                      this.props.history.push('/profile')
                    }}
                    render={({ handleSubmit, pristine, submitting, invalid }) => {
                      return (
                        <form className={classes.form} onSubmit={handleSubmit}>
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
                            <React.Fragment>
                              <TextField {...input} fullWidth className={classes.nameinput} placeholder="Name your item" />
                              <div className={classes.require}>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                              </div>
                            </React.Fragment>

                          )} />
                          <Field name="description" render={({ input, meta }) => (
                            <React.Fragment>
                              <TextField {...input} fullWidth className={classes.descriptioninput} placeholder="Describe your item" />
                              <div className={classes.require}>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                              </div>
                            </React.Fragment>
                          )} />
                          <div className={classes.tagscontainer}>
                            <label className={classes.tagIcons}>
                              <Field name="tags" component="input" type="checkbox" value="household items" />
                              Household Items <HomeOutlined />
                            </label>
                            <label className={classes.tagIcons}>
                              <Field name="tags" component="input" type="checkbox" value="tools" />
                              Tools <BuildOutlined />
                            </label>
                            <label className={classes.tagIcons}>
                              <Field name="tags" component="input" type="checkbox" value="electronics" />
                              Electronics <DevicesOutlined />
                            </label>
                            <label className={classes.tagIcons}>
                              <Field name="tags" component="input" type="checkbox" value="physical media" />
                              Physical Media <BookOutlined />
                            </label>
                            <label className={classes.tagIcons}>
                              <Field name="tags" component="input" type="checkbox" value="sporting goods" />
                              Sporting Goods <HomeOutlined />
                            </label>
                            <label className={classes.tagIcons}>
                              <Field name="tags" component="input" type="checkbox" value="recreational equipment" />
                              Recreational Equipment <InsertEmoticonOutlined />
                            </label>
                            <label className={classes.tagIcons}>
                              <Field name="tags" component="input" type="checkbox" value="musical instruments" />
                              Musical Instruments <MusicNoteOutlined />
                            </label>
                          </div>
                          <div>
                            <Button type="submit" className={classes.share} disabled={pristine || submitting || invalid}>
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
export default withRouter(withStyles(styles)(ShareForm));
