const publications = [
  {
    "title": "ELAN4D: Embodiment-Centric 4D Supervision for Vision-Language-Action Models via Plug-and-Play Adaptation",
    "authors": "Zeyuan He*, <strong>Bowen Yang*</strong>, Zhirui Fang*, Keru Zhou*, Lei Jiang, Jingjing Qian, Fan Mo, <a href='https://thinklab.sjtu.edu.cn/' target='_blank' rel='noopener'>Junchi Yan</a>, Philip Torr, Xiu Li, Li Jiang, and Jialin Yu<sup title='Corresponding author'>✉</sup> <small>(* Equal contribution; ✉ Corresponding author.)</small>",
    "venue": "Conference on Robot Learning (CoRL) 2026",
    "date": "2026-05-28",
    "url": "/publication/2026-05-28-elan4d",
    "thumbnail": { "src": "/assets/img/elan4d/elan4d-teaser.png", "alt": "ELAN4D overview: embodiment-centric 4D supervision and plug-and-play adaptation" },
    "abstract": "<p>ELAN4D is a plug-and-play training framework for Vision-Language-Action models that adds embodiment-centric 4D supervision through future robot keypoint tracks. Using forward kinematics from proprioceptive states, it derives 3D displacement tracks for robot joints and the end-effector, supervises a lightweight auxiliary track decoder during training, and discards the decoder at inference so the base policy interface remains unchanged.</p><p>The paper evaluates ELAN4D on LIBERO, LIBERO-Plus, RoboTwin2.0, and real-world manipulation tasks, showing consistent improvements over strong VLA baselines and stronger generalization under camera, background, and layout shifts.</p>",
    "description": "ELAN4D improves VLA policies with embodiment-centric 4D supervision from future robot keypoint tracks, strengthening robustness under out-of-distribution perturbations.",
    "citation": "<pre><code>@misc{he2026elan4d,\n  title         = {ELAN4D: Embodiment-Centric 4D Supervision for Vision-Language-Action Models via Plug-and-Play Adaptation},\n  author        = {Zeyuan He and Bowen Yang and Zhirui Fang and Keru Zhou and Lei Jiang and Jingjing Qian and Fan Mo and Junchi Yan and Philip Torr and Xiu Li and Li Jiang and Jialin Yu},\n  year          = {2026},\n  eprint        = {2605.30484},\n  archivePrefix = {arXiv},\n  primaryClass  = {cs.RO},\n  note          = {Accepted to the Conference on Robot Learning (CoRL) 2026},\n  url           = {https://arxiv.org/abs/2605.30484}\n}\n</code></pre>",
    "links": [
      {
        "text": "Details",
        "url": "/publication/2026-05-28-elan4d"
      },
      {
        "text": "Paper",
        "url": "https://arxiv.org/pdf/2605.30484v1"
      },
      {
        "text": "arXiv",
        "url": "https://arxiv.org/abs/2605.30484v1"
      },
      {
        "text": "BibTeX",
        "url": "/files/elan4d.bib"
      }
    ],
    "isSelected": true,
    "isPreprint": false,
    "isNew": false
  },
  {
    "title": "GuidedVLA: Specifying Task-Relevant Factors via Plug-and-Play Action Attention Specialization",
    "authors": "<a href='https://jiaxiaosong1002.github.io/' target='_blank' rel='noopener'>Xiaosong Jia</a>*, <strong>Bowen Yang*</strong>, Zuhao Ge*, Xian Nie*, Yuchen Zhou*, Cunxin Fan*, Yufeng Li, Yilin Chai, Chao Jing, Zijian Liang, Qingwen Bu, Haidong Cao, Chao Wu, Qifeng Li, Zhenjie Yang, Chenhe Zhang, Hongyang Li, Zuxuan Wu<sup title='Corresponding author'>✉</sup>, <a href='https://thinklab.sjtu.edu.cn/' target='_blank' rel='noopener'>Junchi Yan</a><sup title='Corresponding author'>✉</sup>, and Yu-Gang Jiang<sup title='Corresponding author'>✉</sup> <small>(* Equal contribution; ✉ Corresponding author.)</small>",
    "venue": "Robotics: Science and Systems (RSS) 2026",
    "date": "2026-05-12",
    "url": "/publication/2026-05-12-guidedvla",
    "thumbnail": { "src": "/assets/img/guidedvla/guidedvla-teaser-800.webp", "alt": "GuidedVLA overview: object grounding, skill logic, and spatial geometry" },
    "abstract": "<p>GuidedVLA is a framework for building more robust and interpretable Vision-Language-Action models by explicitly guiding the action decoder to capture task-relevant factors. We specialize action-decoder attention heads toward object grounding, temporal skill logic, and spatial geometry, improving generalization across simulation benchmarks and real-robot tasks.</p>",
    "description": "GuidedVLA explicitly guides VLA action decoders with specialized attention heads for object grounding, temporal skill logic, and spatial geometry.",
    "citation": "<pre><code>@INPROCEEDINGS{jia2026guidedvla,\n  AUTHOR    = {Xiaosong Jia AND Bowen Yang AND Zuhao Ge AND Xian Nie AND Yuchen Zhou AND Cunxin Fan AND Yufeng Li AND Yilin Chai AND Chao Jing AND Zijian Liang AND Qingwen Bu AND Haidong Cao AND Chao Wu AND Qifeng Li AND Zhenjie Yang AND Chenhe Zhang AND Hongyang Li AND Zuxuan Wu AND Junchi Yan AND Yu-Gang Jiang},\n  TITLE     = {{GuidedVLA: Specifying Task-Relevant Factors via Plug-and-Play Action Attention Specialization}},\n  BOOKTITLE = {Proceedings of Robotics: Science and Systems},\n  YEAR      = {2026},\n  ADDRESS   = {Sydney, Australia},\n  MONTH     = {July},\n  DOI       = {10.15607/RSS.2026.XXII.084}\n}\n</code></pre>",
    "links": [
      {
        "text": "Details",
        "url": "/publication/2026-05-12-guidedvla"
      },
      {
        "text": "Paper",
        "url": "https://guidedvla.github.io/project_page/RSS26___GuidedVLA.pdf"
      },
      {
        "text": "arXiv",
        "url": "https://arxiv.org/abs/2605.12369"
      },
      {
        "text": "Project",
        "url": "https://guidedvla.github.io/project_page/"
      },
      {
        "text": "Code",
        "url": "https://github.com/GuidedVLA/GuidedVLA"
      },
      {
        "text": "Talk",
        "url": "https://www.bilibili.com/video/BV16nL26uELc/"
      },
      {
        "text": "Checkpoint",
        "url": "https://huggingface.co/ybwowen/pi0-libero-object-depth-skill"
      },
      {
        "text": "Dataset",
        "url": "https://huggingface.co/datasets/ybwowen/libero"
      },
      {
        "text": "BibTeX",
        "url": "/files/guidedvla.bib"
      }
    ],
    "isSelected": true,
    "isPreprint": false,
    "isNew": false
  }
];

const projects = [
  {
    "id": "guidedvla",
    "title": "GuidedVLA",
    "description": "An RSS 2026 VLA project that specializes action-decoder attention heads for object grounding, temporal skill logic, and spatial geometry.",
    "fullDescription": "GuidedVLA treats the action decoder as a set of functional components rather than a monolithic learner. The method assigns dedicated attention heads to three task-relevant factors: object grounding, temporal skill logic, and spatial geometry.",
    "venue": "Robotics: Science and Systems (RSS) 2026",
    "links": [
      {
        "text": "Paper",
        "url": "https://guidedvla.github.io/project_page/RSS26___GuidedVLA.pdf"
      },
      {
        "text": "arXiv",
        "url": "https://arxiv.org/abs/2605.12369"
      },
      {
        "text": "Project",
        "url": "https://guidedvla.github.io/project_page/"
      },
      {
        "text": "Code",
        "url": "https://github.com/GuidedVLA/GuidedVLA"
      },
      {
        "text": "Talk",
        "url": "https://www.bilibili.com/video/BV16nL26uELc/"
      },
      {
        "text": "机器之心",
        "url": "https://mp.weixin.qq.com/s/7SD3ulzXL2Xg6izWhs7Eng"
      },
      {
        "text": "Checkpoint",
        "url": "https://huggingface.co/ybwowen/pi0-libero-object-depth-skill"
      },
      {
        "text": "Dataset",
        "url": "https://huggingface.co/datasets/ybwowen/libero"
      }
    ],
    "isSelected": true,
    "badges": [],
    "images": [
      {
        "src": "/assets/img/guidedvla/guidedvla-teaser-1200.webp",
        "alt": "GuidedVLA overview: object grounding, temporal skill logic, and spatial geometry",
        "caption": "GuidedVLA · RSS 2026 · Open Source"
      }
    ]
  },
  {
    "id": "robomaster",
    "title": "RoboMaster — Team Jiao Loong",
    "description": "Vice-Captain and Algorithm Lead, working on SLAM, motion planning, and robotic autonomy.",
    "fullDescription": "I joined Team Jiao Loong, the RoboMaster team of Shanghai Jiao Tong University, in September 2023. From August 2024 to August 2025, I served as Vice-Captain and Algorithm Lead, directing work on SLAM, motion planning, sensor fusion, embedded systems, and robotic autonomy. I contributed to SLAM and navigation for Robot Sentry and received the RM Award (Algorithm) in October 2025.",
    "links": [
      {
        "text": "Talks and interviews",
        "url": "/talks/"
      },
      {
        "text": "Robotics Experience Slides",
        "url": "/slides/"
      }
    ],
    "isSelected": true,
    "badges": [],
    "images": [
      {
        "src": "/assets/img/robomaster/robomaster-action-1200.webp",
        "alt": "RoboMaster competition — on-robot debugging and systems check",
        "caption": "RoboMaster competition — on-robot debugging and systems check (© RoboMaster)."
      },
      {
        "src": "/assets/img/robomaster/robomaster-championship-2024-1200.webp",
        "alt": "RoboMaster 2024 National Champion — Team Jiao Loong",
        "caption": "National Champion 2024"
      },
      {
        "src": "/assets/img/robomaster/robomaster-championship-1200.webp",
        "alt": "RoboMaster 2025 National Champion — Team Jiao Loong",
        "caption": "National Champion 2025"
      }
    ]
  }
];

const talks = [
  {
    "title": "RM Award 2025 (Algorithm) Interview - Highest Individual Honor Award in RoboMaster",
    "date": "2026-04-28",
    "venue": "Shanghai, China",
    "url": "/talks/RM2025_Award_interview",
    "description": "After I received the RM Award 2025, the RoboMaster organizing committee visited Shanghai Jiao Tong University for a personal interview about my RoboMaster journey and our team's work.",
    "attachments": [
      {
        "text": "Video",
        "url": "https://www.bilibili.com/video/BV13h9kB6EK2/?spm_id_from=333.1387.homepage.video_card.click&vd_source=872f94937c0000b40fa246369f324252"
      },
      {
        "text": "Details",
        "url": "/talks/RM2025_Award_interview"
      }
    ]
  },
  {
    "title": "RM Award Nominee Sharing - SLAM and Navigation System Design for Robot Sentry",
    "date": "2025-08-04",
    "venue": "Shenzhen, Guangdong, China",
    "url": "/talks/RM2025_RM_Award",
    "description": "I was nominated for the RM Award (Algorithm). As an RM Award candidate, I was invited to share our technical solution. I officially received the RM Award in October 2025.",
    "attachments": [
      {
        "text": "Video",
        "url": "https://www.bilibili.com/video/BV1hqaKzPEV8/?spm_id_from=333.337.search-card.all.click&vd_source=872f94937c0000b40fa246369f324252"
      },
      {
        "text": "Details",
        "url": "/talks/RM2025_RM_Award"
      }
    ]
  },
  {
    "title": "Interview - Algorithm System Design of Robot Sentry",
    "date": "2024-08-08",
    "venue": "Shenzhen, Guangdong, China",
    "url": "/talks/RM2024_interview",
    "description": "I was invited to share our algorithm design of Robot Sentry after the first match in national finals.",
    "attachments": [
      {
        "text": "Video",
        "url": "https://www.bilibili.com/bangumi/play/ep1113873?spm_id_from=333.337.0.0&from_spmid=666.25.episode.0"
      },
      {
        "text": "Details",
        "url": "/talks/RM2024_interview"
      }
    ]
  }
];

const researchExperience = [
  {
    "period": "Sep 2025 – present",
    "institution": "RethinkLab, Shanghai Jiao Tong University",
    "mentor": "<a href='https://thinklab.sjtu.edu.cn/' target='_blank' rel='noopener'>Prof. Junchi Yan</a> and <a href='https://jiaxiaosong1002.github.io/' target='_blank' rel='noopener'>Prof. Xiaosong Jia</a>",
    "description": "Research assistant working on robust VLA policy learning, representation alignment, and mechanism interpretability. My work studies object grounding, temporal skill recognition, and geometric perception."
  }
];

const honors = [
  "Oct 2025 — Awarded the <strong>RM Award (Algorithm)</strong>; contributed to SLAM and navigation supporting our team’s <strong>National Championship</strong> at RoboMaster 2025.",
  "Sep 2025 — Received the <strong>National Scholarship 2025</strong>.",
  "Aug 2025 — Our team won the <strong>RoboMaster University Championship National Champion (2025)</strong>.",
  "Feb 2025 — Selected as <strong>Finalist (Top 2%)</strong> in the Mathematical Contest in Modeling (MCM), Problem B.",
  "Sep 2024 — Received the <strong>National Scholarship 2024</strong>.",
  "Aug 2024 — Our team won the <strong>RoboMaster University Championship National Champion (2024)</strong>."
];

const teaching = [];

const academicServices = [];

const getSelectedPublications = () => publications.filter(p => p.isSelected && !p.isPreprint);
const getSelectedPreprints = () => publications.filter(p => p.isSelected && p.isPreprint);
const getPublications = () => publications.filter(p => !p.isPreprint).sort((a, b) => b.date.localeCompare(a.date));
const getPreprints = () => publications.filter(p => p.isPreprint).sort((a, b) => b.date.localeCompare(a.date));
const getSelectedProjects = () => projects.filter(p => p.isSelected);

const experiences = [
  {
    "institution": "RobbyAnt",
    "url": "https://www.robbyant.com/",
    "period": "Jul. 2026 – Present",
    "logo": "/assets/img/institutions/robbyant.jpeg",
    "advisor": {
      "name": "Prof. Yinghao Xu",
      "url": "https://justimyhxu.github.io/"
    },
    "position": "Algorithm Engineer Intern"
  },
  {
    "institution": "Shanghai Jiao Tong University",
    "url": "https://en.sjtu.edu.cn/",
    "position": "Undergraduate",
    "department": "Paris Elite Institute of Technology",
    "period": "Sep. 2023 – Present",
    "logo": "/assets/img/institutions/sjtu.png",
    "advisor": {
      "name": "Prof. Junchi Yan",
      "url": "https://thinklab.sjtu.edu.cn/"
    }
  }
];
