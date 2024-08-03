function CustomerServiceSurvey(props) {
  function onSubmit(e) {
    e.prevent.Default();
    alert(
      `You rates us${window.rating.value} and you had the following comments: ${window.customElements.value}`
    );
  }
  return (
    <div>
      <h1>How was your experience with our website today?</h1>
      <form onSubmit={onSubmit}>
        <select name="rating">
          <option>Excellent</option>
          <option>Pretty Good</option>
          <option>Fair</option>
          <option>Bad</option>
          <option>Horrible</option>
        </select>
        <h1>Would you like to leave any comments?</h1>
        <textarea name="comments" id="comments" />

        <input type="submit" value={Submit} />
      </form>
    </div>
  );
}
export default CustomerServiceSurvey;
