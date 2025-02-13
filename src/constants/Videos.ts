import DemoBrett from "../assets/videos/Brett.mp4";
import DemoThomas from "../assets/videos/bad-dont-use.mp4";
import DemoWhatsHisNuts from "../assets/videos/worse.mp4";
import BrettSkate1 from "../assets/videos/brett_skate_1.mp4";
import BrettSkate2 from "../assets/videos/brett_skate_2.mp4";
import BrettSkate3 from "../assets/videos/brett_skate_3.mp4";
import BrettSkate4 from "../assets/videos/brett_skate_4.mp4";
import BrettSkate5 from "../assets/videos/brett_skate_5.mp4";
import BrettSkate6 from "../assets/videos/brett_skate_6.mp4";
import BrettSkate7 from "../assets/videos/brett_skate_7.mp4";

import { images } from "./Images";
import { Video } from "../models/VideoModel";

export const videos: Video[] = [
  { thumbnail: images.Brett, url: DemoBrett },
  { thumbnail: images.Dynamite, url: DemoThomas },
  { thumbnail: images.Dynamite, url: DemoWhatsHisNuts },
  { thumbnail: images.Brett, url: BrettSkate1 },
  { thumbnail: images.Brett, url: BrettSkate2 },
  { thumbnail: images.Brett, url: BrettSkate3 },
  { thumbnail: images.Brett, url: BrettSkate4 },
  { thumbnail: images.Brett, url: BrettSkate5 },
  { thumbnail: images.Brett, url: BrettSkate6 },
  { thumbnail: images.Brett, url: BrettSkate7 },
];
