import "./app.css";
import Card from "./components/Card";
function Header() {
  return <div id="header">Strawhat Pirates</div>;
}
const CardItems = [
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
      "https://static.wikia.nocookie.net/p__/images/3/35/Franky.png/revision/latest?cb=20190529045640&path-prefix=protagonist",
  },
  {
    name: "Brook",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoEEqR_m4jFg1s-7IpLR8bz8nyYPyp-55Ug&s",
  },
];
const App = () => {
  return (
    <div>
      <h2>
        <Header />
      </h2>
      <div id="cards">
        {CardItems.map((member) => {
          return <Card title={member.name} image={member.imgUrl} />;
        })}
      </div>
    </div>
  );
};

export default App;
