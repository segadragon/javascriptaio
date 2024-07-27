import * as styles from "./listing030212.styles.js";

function Article({ headline, authorName, bodyText }) {
  return (
    <div>
      <h2 style={styles.headline}>{headline}</h2>
      <div style={styles.authorName}>{authorName}</div>
      <div style={styles.bodyText}>{bodyText}</div>
    </div>
  );
}

export default Article;
