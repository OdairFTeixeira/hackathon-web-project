import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

import styles from '../styles/components/imageUpload.module.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
);

interface ImageUploadProps {
  label: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label }) => {
  const classes = useStyles();

  return (
    <>
      <div className={styles.componentContainer}>
        <h4 className={styles.componentTitle}>{label}</h4>
        <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        hidden={true}
        type="file"
      />
      <label htmlFor="contained-button-file">
        <div className={styles.upload}>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <FontAwesomeIcon className={styles.uploadIcon} icon={faUpload} />
          </IconButton>
        </div>
      </label>
      </div>
    </>
  );
}

export default ImageUpload;
