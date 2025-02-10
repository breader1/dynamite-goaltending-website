import DemoBrett from "../assets/videos/Brett.mp4";
import DemoThomas from "../assets/videos/bad-dont-use.mp4";
import DemoWhatsHisNuts from "../assets/videos/worse.mp4";
import { Images } from "./Images";
import { Video } from "../models/VideoModel";

export const videos: Video[] = [
  { thumbnail: Images.Brett, url: DemoBrett },
  { thumbnail: Images.Dynamite, url: DemoThomas },
  { thumbnail: Images.Dynamite, url: DemoWhatsHisNuts },
];
