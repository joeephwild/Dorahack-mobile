import verbalAbi from "./VerbalToken.json";
import sessionsAbi from "./Sessions.json";
import podcastAbi from "./PodcastContract.json";
import rewardsAbi from "./RewardsContract.json";

// const VerbalAddress = "0x4100A82F582A09B44A0d2D8A0081B0aF396D2A12";
// const PodcastAddress = "0x190C99181DEdd05894a19e1293831a3F992B75a8";
// const SessionsAddress = "0xe969cC2488238D2408b6E1d92cece37a33E077CC";
// const RewardsAddress = "0x73e5a7A236FF9CB73558433b6Da2880630511629";

const VerbalAddress = "0x068f32500dd6265726a8d1cb6D4ED9416998C0C7";
const PodcastAddress = "0xB80675D4623d20D4C1103455Eb5AfbdE474Ec2C5";
const SessionsAddress = "0x9Fca3C2E61b3dDD093FAF29DBE420D04e53Ab4F2";
const RewardsAddress = "0x6B55f92aF1Bf5445243f702F35DD81C97C6E7744";

const VerbalABI = verbalAbi.abi;
const SessionsABI = sessionsAbi.abi;
const PodcastABI = podcastAbi.abi;
const RewardsABI = rewardsAbi.abi;
export {
  VerbalAddress,
  VerbalABI,
  PodcastAddress,
  PodcastABI,
  SessionsAddress,
  SessionsABI,
  RewardsAddress,
  RewardsABI,
};
