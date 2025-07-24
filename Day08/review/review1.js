const nintendo = [
  {
    title: "마리오 카트",
    genre: ["레이싱", "아케이드"],
    price: 59800,
    multiplayer: true,
  },
  {
    title: "포켓몬스터",
    genre: ["RPG", "어드벤처"],
    price: 64800,
    multiplayer: false,
  },
  {
    title: "동물의 숲",
    genre: ["RPG", "힐링"],
    price: 64800,
    multiplayer: true,
  },
  {
    title: "별의 커비",
    genre: ["액션", "어드벤처"],
    price: 64900,
    multiplayer: false,
  },
  {
    title: "슈퍼마리오 오디세아",
    genre: ["액션", "어드벤처", "아케이드"],
    price: 79800,
    multiplayer: false,
  },
];

// 1 가격이 60000원 이하이고 멀티 플레이가 되는 게임 리스트
const q1 = nintendo.filter((x) => x.price <= 60000 && x.multiplayer);

console.log(q1);
// 2 장르가 어드벤처 이고, 가격이 60000원 이상인 게임 리스트
const q2 = nintendo.filter(
  (x) => x.genre.some((v) => v == "어드벤처") && x.price >= 60000
);
// 3 멀티플레이어가 안되고, 장르가 어드벤처인 게임 리스트
nintendo.filter((x) => !x.multiplayer && x.genre.some((v) => v == "어드벤처"));
