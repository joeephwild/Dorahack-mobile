import verbalAbi from "./VerbalToken.json";
import sessionsAbi from "./Sessions.json";
import podcastAbi from "./PodcastContract.json";
import rewardsAbi from "./RewardsContract.json";

// const VerbalAddress = "0x4100A82F582A09B44A0d2D8A0081B0aF396D2A12";
// const PodcastAddress = "0x190C99181DEdd05894a19e1293831a3F992B75a8";
// const SessionsAddress = "0xe969cC2488238D2408b6E1d92cece37a33E077CC";
// const RewardsAddress = "0x73e5a7A236FF9CB73558433b6Da2880630511629";

const VerbalAddress = "0x98962d3F5507980C1468298136d0a9cbC5806Ce7";
const PodcastAddress = "0xb4d1D06b55fe7FaeA1e6A817C4476B88D6F50FB7";
const SessionsAddress = "0x2a00F9c59c0afbb29a5140895FF1d05d191Cd2ca";
const RewardsAddress = "0xe2aF80b0B2CF386E1bf1CdAdf4ff9732f476745A";

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
