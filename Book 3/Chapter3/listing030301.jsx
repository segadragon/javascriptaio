export default function Bing() {
  return (
    <Homepage>
      <TopNav />
      <SearchBox />
      <NewImageScroller />
      <div>
        <div class="rightColumn">
          <TopStories />
        </div>
        <div class="leftColumn">
          <Weather postalCode="97103" />
          <Sports />
        </div>
      </div>
    </Homepage>
  );
}
