import "./app.css";
function Header() {
  return <div id="header">Strawhat Pirates</div>;
}

function Card() {
  return (
    <div id="card">
      {/* <h3 id="h3"></h3> */}
      <img />
    </div>
  );
}
const App = () => {
  let CardItems = [
    {
      name: "Luffy",
      imgUrl: "https://static.tvtropes.org/pmwiki/pub/images/op_luffy_5.png",
    },
    {
      name: "Zoro",
      imgUrl: "https://static.tvtropes.org/pmwiki/pub/images/op_zoro_2.png",
    },
    {
      name: "Nami",
      imgUrl: "https://static.tvtropes.org/pmwiki/pub/images/op_nami_3.png",
    },
    {
      name: "Usopp",
      imgUrl: "https://static.tvtropes.org/pmwiki/pub/images/usopp_anime_6.png",
    },
    {
      name: "Sanji",
      imgUrl: "https://static.tvtropes.org/pmwiki/pub/images/op_sanji.png",
    },
    {
      name: "Chopper",
      imgUrl:
        "https://static.tvtropes.org/pmwiki/pub/images/tony_tony_chopper_anime.png",
    },
    {
      name: "Robin",
      imgUrl:
        "https://static.tvtropes.org/pmwiki/pub/images/nico_robin_anime_7.png",
    },
    {
      name: "Franky",
      imgUrl:
        "https://static.wikia.nocookie.net/onepiece/images/3/30/Franky_Anime_Pre_Timeskip_Infobox.png/revision/latest?cb=20220913095711",
    },
    {
      name: "Brook",
      imgUrl:
        "https://static.wikia.nocookie.net/p__/images/5/55/Brook.png/revision/latest?cb=20190529050014&path-prefix=protagonist",
    },
  ];
  const oneMember = [];
  CardItems.map((member) => {
    oneMember.push(member.name, member.imgUrl);
  });

  return (
    <div>
      <h2>
        <Header />
      </h2>
      <div id="cards">
        <Card src={CardItems[1].imgUrl} />
        {oneMember}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
