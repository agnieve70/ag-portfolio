import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <div class="">
      <img class={styles.page_not_found} src="./404.jpg" alt="error_404" />
      <Link
        className={
          "btn btn-info shadow  rounded-pill px-4 py-3 " + styles.button_box
        }
        to="/"
      >
        <i className="fas fa-power-off" aria-hidden="true"></i>
      </Link>
    </div>
  );
  
}

export default NotFoundPage