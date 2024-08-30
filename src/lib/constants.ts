// set category values
enum Category {
  ClassicPhysique = "Classic Physique",
  Bodybuilding = "Bodybuilding",
  Twoonetwo = "Twoonetwo",
  Physique = "Physique",
  Coach = "Coach",
}

export const categoryList = [
  Category.ClassicPhysique,
  Category.Bodybuilding,
  Category.Twoonetwo,
  Category.Physique,
  Category.Coach,
];

interface Athlete {
  name: string;
  youtubeChannelId: string;
  youtubeChannelName: string;
  category: Category;
  profile: string;
}

// 선수 목록
export const athleteList: Athlete[] = [
  {
    name: "Chris Bumstead",
    youtubeChannelId: "UC4514FwdRy5gI6CdC9GPb0w",
    youtubeChannelName: "Chris Bumstead",
    category: Category.ClassicPhysique,
    profile:
      "https://yt3.googleusercontent.com/ytc/AIdro_mPkdS1NVAv3Mz5Onf18yAZ5TlU487ov56Vx6Cd12tS0_c=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Ramon Dino",
    youtubeChannelId: "UC7RaQvO8fqoyd62RmIg_yGA",
    youtubeChannelName: "Ramon Dino Pro",
    category: Category.ClassicPhysique,
    profile:
      "https://yt3.googleusercontent.com/AMGZONHtMVdrZfewDk-w6x4J5tT9oPV4tJg0a1OnnuIFbFmR8lhLg13ywUOdecvDLshHNl7f=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Wesley Vissers",
    youtubeChannelId: "UCWl4r8lWQwk1BRQhNugBYzQ",
    youtubeChannelName: "Wesley Vissers",
    category: Category.ClassicPhysique,
    profile:
      "https://yt3.googleusercontent.com/Uv48Ub1WvJ-_qDSJR-D-rzpZeGcgpvmBB02LXGbalIwfj6RPDFaN_hOo_tKMttWRCuFKU6HC4w=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Nick Walker",
    category: Category.Bodybuilding,
    youtubeChannelId: "UCotK4Y3BtGTdt7qzFR3vI1A",
    youtubeChannelName: "Nick Walker",
    profile:
      "https://yt3.googleusercontent.com/tfV3_ECZkego8-of2M1kWaBQTZvjyOfda8-WFAHI7dumFgU8TQu6EkprJaZSn279HZGFxtHI=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Hany Rambod",
    category: Category.Coach,
    youtubeChannelId: "UCILtJghd5UNT5fOF4zq8uJg",
    youtubeChannelName: "Hany Rambod",
    profile:
      "https://yt3.googleusercontent.com/ytc/AIdro_neo7Z2zcH32Gq-l0zIhaOZNfr1vSfEw6-N6R1WHHyO3Q=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Derek Lunsford",
    category: Category.Twoonetwo,
    youtubeChannelId: "UCjwOzMemaGoKI3L745Asd8Q",
    youtubeChannelName: "Derek Lunsford",
    profile:
      "https://yt3.googleusercontent.com/F7U9V7LehmL6kduMwh7Kc561M-Gc6p06O3qsbWsfcv3jAIryrmseeV2iPF7y4K2Q9VbIH8RIag=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Jeremy Buendia",
    category: Category.Physique,
    youtubeChannelId: "UCp7wjwYf7Y0NcD7zzHctS6Q",
    youtubeChannelName: "Jeremy Buendia",
    profile:
      "https://yt3.ggpht.com/ytc/AIdro_mWxEBSR6zUOJStxSulXq-xWNjFh4zr1-s6pnYg7xL53Q=s800-c-k-c0x00ffffff-no-rj",
  },
];
