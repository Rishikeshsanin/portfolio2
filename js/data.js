/* Rishikesh Munnaluri portfolio content. */
window.DATA = {
  "work": [
    {
      "id": "returnreview",
      "n": "ReturnReview",
      "y": "2026",
      "k": "CV + LLM",
      "t": "AI-powered product-return inspection that turns multi-angle visual evidence into a grounded review while keeping the final decision human.",
      "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%201100%22%3E%3Crect%20width%3D%221600%22%20height%3D%221100%22%20fill%3D%22%23e8e7e1%22%2F%3E%3Crect%20x%3D%22170%22%20y%3D%22100%22%20width%3D%221260%22%20height%3D%22790%22%20rx%3D%2222%22%20fill%3D%22%230b0b0c%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%22720%22%20rx%3D%2210%22%20fill%3D%22%23101115%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%2254%22%20fill%3D%22%2318191f%22%2F%3E%3Ctext%20x%3D%22250%22%20y%3D%22280%22%20fill%3D%22%23C6F24E%22%20font-family%3D%22monospace%22%20font-size%3D%2228%22%3EVISUAL%20EVIDENCE%3C%2Ftext%3E%3Crect%20x%3D%22250%22%20y%3D%22320%22%20width%3D%221100%22%20height%3D%22350%22%20rx%3D%2218%22%20fill%3D%22%23171a20%22%20stroke%3D%22%23323742%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%22105%22%20fill%3D%22%23101216%22%20stroke%3D%22%23C6F24E%22%20stroke-width%3D%2210%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%2228%22%20fill%3D%22%23C6F24E%22%2F%3E%3Cpath%20d%3D%22M650%20560C720%20470%20790%20590%20860%20500S1010%20430%201110%20520S1240%20560%201300%20450%22%20fill%3D%22none%22%20stroke%3D%22%23C6F24E%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20x%3D%22650%22%20y%3D%22410%22%20fill%3D%22%238f96a5%22%20font-family%3D%22monospace%22%20font-size%3D%2224%22%3Ecv%20%2F%20evidence%20review%3C%2Ftext%3E%3Ctext%20x%3D%22240%22%20y%3D%22815%22%20fill%3D%22%23C6F24E%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%2258%22%3EReturnReview%3C%2Ftext%3E%3Cpath%20d%3D%22M110%20920H1490L1570%201000H30Z%22%20fill%3D%22%23cac9c3%22%2F%3E%3C%2Fsvg%3E",
      "live": "https://returnreview-web-production.up.railway.app",
      "repo": "https://github.com/Rishikeshsanin/ReturnReview",
      "d": "ReturnReview combines category verification, damage localization and evidence aggregation with an LLM review layer. Computer vision observes the package, policy data supplies facts, the LLM interprets the evidence, and a human reviewer makes the final decision. The project includes controlled evaluation, safeguards, deployment checks and a production web/API stack.",
      "stack": [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "MobileNetV3",
        "YOLO11n-seg",
        "Gemini",
        "Railway"
      ],
      "metrics": [
        [
          "CV + LLM",
          "evidence pipeline"
        ],
        [
          "human",
          "final decision"
        ],
        [
          "live",
          "production app"
        ]
      ]
    },
    {
      "id": "skylark",
      "n": "Skylark Command",
      "y": "2026",
      "k": "Decision Intelligence",
      "t": "A decision-intelligence layer over operational data, with deterministic business arithmetic and bounded AI interpretation.",
      "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%201100%22%3E%3Crect%20width%3D%221600%22%20height%3D%221100%22%20fill%3D%22%23e8e7e1%22%2F%3E%3Crect%20x%3D%22170%22%20y%3D%22100%22%20width%3D%221260%22%20height%3D%22790%22%20rx%3D%2222%22%20fill%3D%22%230b0b0c%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%22720%22%20rx%3D%2210%22%20fill%3D%22%23101115%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%2254%22%20fill%3D%22%2318191f%22%2F%3E%3Ctext%20x%3D%22250%22%20y%3D%22280%22%20fill%3D%22%238FA8FF%22%20font-family%3D%22monospace%22%20font-size%3D%2228%22%3EDECISION%20INTELLIGENCE%3C%2Ftext%3E%3Crect%20x%3D%22250%22%20y%3D%22320%22%20width%3D%221100%22%20height%3D%22350%22%20rx%3D%2218%22%20fill%3D%22%23171a20%22%20stroke%3D%22%23323742%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%22105%22%20fill%3D%22%23101216%22%20stroke%3D%22%238FA8FF%22%20stroke-width%3D%2210%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%2228%22%20fill%3D%22%238FA8FF%22%2F%3E%3Cpath%20d%3D%22M650%20560C720%20470%20790%20590%20860%20500S1010%20430%201110%20520S1240%20560%201300%20450%22%20fill%3D%22none%22%20stroke%3D%22%238FA8FF%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20x%3D%22650%22%20y%3D%22410%22%20fill%3D%22%238f96a5%22%20font-family%3D%22monospace%22%20font-size%3D%2224%22%3Eoperations%20%2F%20decision%20intelligence%3C%2Ftext%3E%3Ctext%20x%3D%22240%22%20y%3D%22815%22%20fill%3D%22%238FA8FF%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%2258%22%3ESkylark%20Command%3C%2Ftext%3E%3Cpath%20d%3D%22M110%20920H1490L1570%201000H30Z%22%20fill%3D%22%23cac9c3%22%2F%3E%3C%2Fsvg%3E",
      "live": "https://skylark-command.vercel.app",
      "repo": "https://github.com/Rishikeshsanin/skylark-command",
      "d": "Skylark Command turns operational data into an executive command surface. Core business arithmetic stays deterministic in TypeScript while AI is limited to interpretation and planning, keeping numerical decisions auditable.",
      "stack": [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Gemini",
        "monday.com",
        "Vercel"
      ],
      "metrics": [
        [
          "deterministic",
          "core metrics"
        ],
        [
          "bounded AI",
          "interpretation"
        ],
        [
          "live",
          "on Vercel"
        ]
      ]
    },
    {
      "id": "imposterx",
      "n": "Imposter X",
      "y": "2026",
      "k": "Realtime",
      "t": "A voice-and-video social deduction game built around live rooms, synchronized state and fast multiplayer interactions.",
      "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%201100%22%3E%3Crect%20width%3D%221600%22%20height%3D%221100%22%20fill%3D%22%23e8e7e1%22%2F%3E%3Crect%20x%3D%22170%22%20y%3D%22100%22%20width%3D%221260%22%20height%3D%22790%22%20rx%3D%2222%22%20fill%3D%22%230b0b0c%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%22720%22%20rx%3D%2210%22%20fill%3D%22%23101115%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%2254%22%20fill%3D%22%2318191f%22%2F%3E%3Ctext%20x%3D%22250%22%20y%3D%22280%22%20fill%3D%22%23FF9E7A%22%20font-family%3D%22monospace%22%20font-size%3D%2228%22%3EREALTIME%20ROOM%3C%2Ftext%3E%3Crect%20x%3D%22250%22%20y%3D%22320%22%20width%3D%221100%22%20height%3D%22350%22%20rx%3D%2218%22%20fill%3D%22%23171a20%22%20stroke%3D%22%23323742%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%22105%22%20fill%3D%22%23101216%22%20stroke%3D%22%23FF9E7A%22%20stroke-width%3D%2210%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%2228%22%20fill%3D%22%23FF9E7A%22%2F%3E%3Cpath%20d%3D%22M650%20560C720%20470%20790%20590%20860%20500S1010%20430%201110%20520S1240%20560%201300%20450%22%20fill%3D%22none%22%20stroke%3D%22%23FF9E7A%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20x%3D%22650%22%20y%3D%22410%22%20fill%3D%22%238f96a5%22%20font-family%3D%22monospace%22%20font-size%3D%2224%22%3Elive%20room%20%2F%20voice%20%2B%20video%3C%2Ftext%3E%3Ctext%20x%3D%22240%22%20y%3D%22815%22%20fill%3D%22%23FF9E7A%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%2258%22%3EImposter%20X%3C%2Ftext%3E%3Cpath%20d%3D%22M110%20920H1490L1570%201000H30Z%22%20fill%3D%22%23cac9c3%22%2F%3E%3C%2Fsvg%3E",
      "live": "https://imposter-x.vercel.app/",
      "repo": "https://github.com/Rishikeshsanin/Imposter-X",
      "d": "Imposter X takes the party-game loop into live voice and video, centered on room state, participant presence, turn flow and realtime edge cases.",
      "stack": [
        "Next.js",
        "React",
        "TypeScript",
        "LiveKit",
        "Realtime Rooms",
        "Vercel"
      ],
      "metrics": [
        [
          "voice + video",
          "live rooms"
        ],
        [
          "realtime",
          "state sync"
        ],
        [
          "mobile",
          "first gameplay"
        ]
      ]
    },
    {
      "id": "nocodeml",
      "n": "NoCodeML",
      "y": "2026",
      "k": "Machine Learning",
      "t": "A browser-based ML experimentation platform for data inspection, preprocessing, training, comparison and batch prediction.",
      "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%201100%22%3E%3Crect%20width%3D%221600%22%20height%3D%221100%22%20fill%3D%22%23e8e7e1%22%2F%3E%3Crect%20x%3D%22170%22%20y%3D%22100%22%20width%3D%221260%22%20height%3D%22790%22%20rx%3D%2222%22%20fill%3D%22%230b0b0c%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%22720%22%20rx%3D%2210%22%20fill%3D%22%23101115%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%2254%22%20fill%3D%22%2318191f%22%2F%3E%3Ctext%20x%3D%22250%22%20y%3D%22280%22%20fill%3D%22%23C6F24E%22%20font-family%3D%22monospace%22%20font-size%3D%2228%22%3EMODEL%20WORKFLOW%3C%2Ftext%3E%3Crect%20x%3D%22250%22%20y%3D%22320%22%20width%3D%221100%22%20height%3D%22350%22%20rx%3D%2218%22%20fill%3D%22%23171a20%22%20stroke%3D%22%23323742%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%22105%22%20fill%3D%22%23101216%22%20stroke%3D%22%23C6F24E%22%20stroke-width%3D%2210%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%2228%22%20fill%3D%22%23C6F24E%22%2F%3E%3Cpath%20d%3D%22M650%20560C720%20470%20790%20590%20860%20500S1010%20430%201110%20520S1240%20560%201300%20450%22%20fill%3D%22none%22%20stroke%3D%22%23C6F24E%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20x%3D%22650%22%20y%3D%22410%22%20fill%3D%22%238f96a5%22%20font-family%3D%22monospace%22%20font-size%3D%2224%22%3Eexperiments%20%2F%20model%20comparison%3C%2Ftext%3E%3Ctext%20x%3D%22240%22%20y%3D%22815%22%20fill%3D%22%23C6F24E%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%2258%22%3ENoCodeML%3C%2Ftext%3E%3Cpath%20d%3D%22M110%20920H1490L1570%201000H30Z%22%20fill%3D%22%23cac9c3%22%2F%3E%3C%2Fsvg%3E",
      "repo": "https://github.com/ojas-ba/NoCodeML",
      "d": "NoCodeML covers CSV ingestion, data-quality inspection, preprocessing, classification and regression training, model comparison, feature importance and batch prediction.",
      "stack": [
        "FastAPI",
        "PostgreSQL",
        "Scikit-learn",
        "Celery",
        "Redis",
        "Docker",
        "React"
      ],
      "metrics": [
        [
          "100K+",
          "row validation"
        ],
        [
          "multi-model",
          "comparison"
        ],
        [
          "batch",
          "prediction"
        ]
      ]
    },
    {
      "id": "echotype",
      "n": "EchoType",
      "y": "2026",
      "k": "Speech UX",
      "t": "A low-latency speech-to-text interface focused on fast dictation, language access and a polished typing experience.",
      "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%201100%22%3E%3Crect%20width%3D%221600%22%20height%3D%221100%22%20fill%3D%22%23e8e7e1%22%2F%3E%3Crect%20x%3D%22170%22%20y%3D%22100%22%20width%3D%221260%22%20height%3D%22790%22%20rx%3D%2222%22%20fill%3D%22%230b0b0c%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%22720%22%20rx%3D%2210%22%20fill%3D%22%23101115%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%2254%22%20fill%3D%22%2318191f%22%2F%3E%3Ctext%20x%3D%22250%22%20y%3D%22280%22%20fill%3D%22%238FA8FF%22%20font-family%3D%22monospace%22%20font-size%3D%2228%22%3ESPEECH%20UX%3C%2Ftext%3E%3Crect%20x%3D%22250%22%20y%3D%22320%22%20width%3D%221100%22%20height%3D%22350%22%20rx%3D%2218%22%20fill%3D%22%23171a20%22%20stroke%3D%22%23323742%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%22105%22%20fill%3D%22%23101216%22%20stroke%3D%22%238FA8FF%22%20stroke-width%3D%2210%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%2228%22%20fill%3D%22%238FA8FF%22%2F%3E%3Cpath%20d%3D%22M650%20560C720%20470%20790%20590%20860%20500S1010%20430%201110%20520S1240%20560%201300%20450%22%20fill%3D%22none%22%20stroke%3D%22%238FA8FF%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20x%3D%22650%22%20y%3D%22410%22%20fill%3D%22%238f96a5%22%20font-family%3D%22monospace%22%20font-size%3D%2224%22%3Espeech%20%2F%20dictation%20interface%3C%2Ftext%3E%3Ctext%20x%3D%22240%22%20y%3D%22815%22%20fill%3D%22%238FA8FF%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%2258%22%3EEchoType%3C%2Ftext%3E%3Cpath%20d%3D%22M110%20920H1490L1570%201000H30Z%22%20fill%3D%22%23cac9c3%22%2F%3E%3C%2Fsvg%3E",
      "repo": "https://github.com/Rishikeshsanin/EchoType",
      "d": "EchoType is a speech and typing experiment designed around immediacy, quick capture, readable feedback and broad language access.",
      "stack": [
        "JavaScript",
        "Speech Recognition",
        "Web APIs",
        "Responsive UI",
        "Vercel"
      ],
      "metrics": [
        [
          "61",
          "languages"
        ],
        [
          "low latency",
          "interaction"
        ],
        [
          "web",
          "dictation UI"
        ]
      ]
    },
    {
      "id": "vibify",
      "n": "Vibify",
      "y": "2026",
      "k": "Realtime Music",
      "t": "Shared listening rooms where every device plays the same track while the host controls the room timeline.",
      "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%201100%22%3E%3Crect%20width%3D%221600%22%20height%3D%221100%22%20fill%3D%22%23e8e7e1%22%2F%3E%3Crect%20x%3D%22170%22%20y%3D%22100%22%20width%3D%221260%22%20height%3D%22790%22%20rx%3D%2222%22%20fill%3D%22%230b0b0c%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%22720%22%20rx%3D%2210%22%20fill%3D%22%23101115%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%2254%22%20fill%3D%22%2318191f%22%2F%3E%3Ctext%20x%3D%22250%22%20y%3D%22280%22%20fill%3D%22%23C6F24E%22%20font-family%3D%22monospace%22%20font-size%3D%2228%22%3ESYNCED%20AUDIO%3C%2Ftext%3E%3Crect%20x%3D%22250%22%20y%3D%22320%22%20width%3D%221100%22%20height%3D%22350%22%20rx%3D%2218%22%20fill%3D%22%23171a20%22%20stroke%3D%22%23323742%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%22105%22%20fill%3D%22%23101216%22%20stroke%3D%22%23C6F24E%22%20stroke-width%3D%2210%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%2228%22%20fill%3D%22%23C6F24E%22%2F%3E%3Cpath%20d%3D%22M650%20560C720%20470%20790%20590%20860%20500S1010%20430%201110%20520S1240%20560%201300%20450%22%20fill%3D%22none%22%20stroke%3D%22%23C6F24E%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20x%3D%22650%22%20y%3D%22410%22%20fill%3D%22%238f96a5%22%20font-family%3D%22monospace%22%20font-size%3D%2224%22%3Eshared%20listening%20%2F%20realtime%20room%3C%2Ftext%3E%3Ctext%20x%3D%22240%22%20y%3D%22815%22%20fill%3D%22%23C6F24E%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%2258%22%3EVibify%3C%2Ftext%3E%3Cpath%20d%3D%22M110%20920H1490L1570%201000H30Z%22%20fill%3D%22%23cac9c3%22%2F%3E%3C%2Fsvg%3E",
      "live": "https://vibify-mu.vercel.app",
      "repo": "https://github.com/Rishikeshsanin/vibify",
      "d": "Vibify synchronizes music rooms while each device plays the YouTube stream locally and Firebase carries small pieces of room state.",
      "stack": [
        "Next.js",
        "React",
        "TypeScript",
        "Firebase",
        "YouTube IFrame API",
        "Realtime Sync",
        "Vercel"
      ],
      "metrics": [
        [
          "shared",
          "listening rooms"
        ],
        [
          "host",
          "timeline control"
        ],
        [
          "realtime",
          "room state"
        ]
      ]
    },
    {
      "id": "axiom",
      "n": "Axiom Imaging",
      "y": "2026",
      "k": "Healthcare Systems",
      "t": "A research-oriented DICOM and PACS operations platform for imaging workflow, storage and viewer tooling.",
      "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%201100%22%3E%3Crect%20width%3D%221600%22%20height%3D%221100%22%20fill%3D%22%23e8e7e1%22%2F%3E%3Crect%20x%3D%22170%22%20y%3D%22100%22%20width%3D%221260%22%20height%3D%22790%22%20rx%3D%2222%22%20fill%3D%22%230b0b0c%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%22720%22%20rx%3D%2210%22%20fill%3D%22%23101115%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%2254%22%20fill%3D%22%2318191f%22%2F%3E%3Ctext%20x%3D%22250%22%20y%3D%22280%22%20fill%3D%22%238FA8FF%22%20font-family%3D%22monospace%22%20font-size%3D%2228%22%3EMEDICAL%20IMAGING%3C%2Ftext%3E%3Crect%20x%3D%22250%22%20y%3D%22320%22%20width%3D%221100%22%20height%3D%22350%22%20rx%3D%2218%22%20fill%3D%22%23171a20%22%20stroke%3D%22%23323742%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%22105%22%20fill%3D%22%23101216%22%20stroke%3D%22%238FA8FF%22%20stroke-width%3D%2210%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%2228%22%20fill%3D%22%238FA8FF%22%2F%3E%3Cpath%20d%3D%22M650%20560C720%20470%20790%20590%20860%20500S1010%20430%201110%20520S1240%20560%201300%20450%22%20fill%3D%22none%22%20stroke%3D%22%238FA8FF%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20x%3D%22650%22%20y%3D%22410%22%20fill%3D%22%238f96a5%22%20font-family%3D%22monospace%22%20font-size%3D%2224%22%3EDICOM%20%2F%20PACS%20operations%3C%2Ftext%3E%3Ctext%20x%3D%22240%22%20y%3D%22815%22%20fill%3D%22%238FA8FF%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%2258%22%3EAxiom%20Imaging%3C%2Ftext%3E%3Cpath%20d%3D%22M110%20920H1490L1570%201000H30Z%22%20fill%3D%22%23cac9c3%22%2F%3E%3C%2Fsvg%3E",
      "repo": "https://github.com/Rishikeshsanin/axiom-imaging",
      "d": "Axiom Imaging explores DICOM ingestion, PACS operations, DICOMweb access and viewer integration across Next.js, FastAPI, PostgreSQL, Orthanc and OHIF.",
      "stack": [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Orthanc",
        "DICOMweb",
        "OHIF",
        "C++",
        "Docker"
      ],
      "metrics": [
        [
          "DICOM",
          "workflow"
        ],
        [
          "PACS",
          "operations"
        ],
        [
          "research",
          "platform"
        ]
      ]
    },
    {
      "id": "mostlikely",
      "n": "MostLikely",
      "y": "2026",
      "k": "Realtime Game",
      "t": "A phone-first group voting game with secret ballots, synchronized reveals and session-level awards.",
      "img": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201600%201100%22%3E%3Crect%20width%3D%221600%22%20height%3D%221100%22%20fill%3D%22%23e8e7e1%22%2F%3E%3Crect%20x%3D%22170%22%20y%3D%22100%22%20width%3D%221260%22%20height%3D%22790%22%20rx%3D%2222%22%20fill%3D%22%230b0b0c%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%22720%22%20rx%3D%2210%22%20fill%3D%22%23101115%22%2F%3E%3Crect%20x%3D%22205%22%20y%3D%22135%22%20width%3D%221190%22%20height%3D%2254%22%20fill%3D%22%2318191f%22%2F%3E%3Ctext%20x%3D%22250%22%20y%3D%22280%22%20fill%3D%22%23FF9E7A%22%20font-family%3D%22monospace%22%20font-size%3D%2228%22%3ESECRET%20BALLOT%3C%2Ftext%3E%3Crect%20x%3D%22250%22%20y%3D%22320%22%20width%3D%221100%22%20height%3D%22350%22%20rx%3D%2218%22%20fill%3D%22%23171a20%22%20stroke%3D%22%23323742%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%22105%22%20fill%3D%22%23101216%22%20stroke%3D%22%23FF9E7A%22%20stroke-width%3D%2210%22%2F%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22495%22%20r%3D%2228%22%20fill%3D%22%23FF9E7A%22%2F%3E%3Cpath%20d%3D%22M650%20560C720%20470%20790%20590%20860%20500S1010%20430%201110%20520S1240%20560%201300%20450%22%20fill%3D%22none%22%20stroke%3D%22%23FF9E7A%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20x%3D%22650%22%20y%3D%22410%22%20fill%3D%22%238f96a5%22%20font-family%3D%22monospace%22%20font-size%3D%2224%22%3Esecret%20vote%20%2F%20synchronized%20reveal%3C%2Ftext%3E%3Ctext%20x%3D%22240%22%20y%3D%22815%22%20fill%3D%22%23FF9E7A%22%20font-family%3D%22Arial%2Csans-serif%22%20font-weight%3D%22800%22%20font-size%3D%2258%22%3EMostLikely%3C%2Ftext%3E%3Cpath%20d%3D%22M110%20920H1490L1570%201000H30Z%22%20fill%3D%22%23cac9c3%22%2F%3E%3C%2Fsvg%3E",
      "live": "https://most-likely-azure.vercel.app",
      "repo": "https://github.com/Rishikeshsanin/MostLikely",
      "d": "MostLikely turns a group question into a synchronized room experience with private voting, coordinated reveals, rankings and awards.",
      "stack": [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "Realtime",
        "Edge Functions",
        "PostgreSQL",
        "Vercel"
      ],
      "metrics": [
        [
          "secret",
          "ballots"
        ],
        [
          "sync",
          "reveals"
        ],
        [
          "session",
          "awards"
        ]
      ]
    }
  ],
  "icons": [
    {
      "slug": "python",
      "label": "Python",
      "hex": "3776AB"
    },
    {
      "slug": "pytorch",
      "label": "PyTorch",
      "hex": "EE4C2C"
    },
    {
      "slug": "openai",
      "label": "LLMs",
      "hex": "FFFFFF"
    },
    {
      "slug": "huggingface",
      "label": "Hugging Face",
      "hex": "FFD21E"
    },
    {
      "slug": "scikitlearn",
      "label": "scikit-learn",
      "hex": "F7931E"
    },
    {
      "slug": "numpy",
      "label": "NumPy",
      "hex": "013243"
    },
    {
      "slug": "pandas",
      "label": "pandas",
      "hex": "150458"
    },
    {
      "slug": "react",
      "label": "React",
      "hex": "61DAFB"
    },
    {
      "slug": "nextdotjs",
      "label": "Next.js",
      "hex": "FFFFFF"
    },
    {
      "slug": "typescript",
      "label": "TypeScript",
      "hex": "3178C6"
    },
    {
      "slug": "javascript",
      "label": "JavaScript",
      "hex": "F7DF1E"
    },
    {
      "slug": "tailwindcss",
      "label": "Tailwind",
      "hex": "06B6D4"
    },
    {
      "slug": "nodedotjs",
      "label": "Node.js",
      "hex": "999999"
    },
    {
      "slug": "express",
      "label": "Express",
      "hex": "FFFFFF"
    },
    {
      "slug": "supabase",
      "label": "Supabase",
      "hex": "3FCF8E"
    },
    {
      "slug": "postgresql",
      "label": "PostgreSQL",
      "hex": "4169E1"
    },
    {
      "slug": "fastapi",
      "label": "FastAPI",
      "hex": "0FC9A0"
    },
    {
      "slug": "docker",
      "label": "Docker",
      "hex": "2496ED"
    },
    {
      "slug": "git",
      "label": "Git",
      "hex": "F05032"
    },
    {
      "slug": "github",
      "label": "GitHub",
      "hex": "FFFFFF"
    },
    {
      "slug": "vercel",
      "label": "Vercel",
      "hex": "FFFFFF"
    },
    {
      "slug": "linux",
      "label": "Linux",
      "hex": "FFFFFF"
    },
    {
      "slug": "googlecloud",
      "label": "Google Cloud",
      "hex": "4285F4"
    }
  ],
  "abilities": [
    [
      "Python",
      92
    ],
    [
      "Full-Stack Engineering",
      90
    ],
    [
      "Applied AI · LLMs",
      89
    ],
    [
      "Realtime Systems",
      87
    ],
    [
      "Computer Vision",
      86
    ],
    [
      "Backend · APIs",
      86
    ],
    [
      "React · Next.js",
      85
    ],
    [
      "Data · PostgreSQL",
      83
    ]
  ],
  "chips": [
    "Gemini",
    "RAG",
    "YOLO",
    "FastAPI",
    "Supabase Realtime",
    "LiveKit",
    "Firebase",
    "Docker",
    "Scikit-learn",
    "PostgreSQL",
    "GitHub Actions",
    "Vercel",
    "Railway"
  ],
  "achievements": [
    {
      "h": "Karnataka Elevate 2025 Finalist",
      "w": "Mew Thetis · Socio Drift",
      "p": "Presented Socio Drift, an AI-powered music generation platform, for government startup funding as part of Mew Thetis.",
      "m": "FINALIST"
    },
    {
      "h": "Assistant Teaching Faculty Intern",
      "w": "RICON Technologies · May–Jul 2026",
      "p": "Supported C and Python theory and lab sessions, prepared practical exercises and mentored students through debugging and core programming concepts.",
      "m": "2026"
    },
    {
      "h": "Cybersecurity Intern",
      "w": "Dhee Data Center · Jun–Jul 2024",
      "p": "Built and evaluated a Python machine-learning malware-detection pipeline using static file features and multiple supervised models.",
      "m": "ML"
    }
  ],
  "certs": [
    {
      "bg": "#C6F24E",
      "fg": "#0B0B0C",
      "h": "B.Tech CSE — AI & ML",
      "w": "RV University · 2023–2027",
      "s": "Final year",
      "m": "2027",
      "p": "Computer Science and Engineering with an Artificial Intelligence and Machine Learning specialization."
    },
    {
      "bg": "#2B3FA8",
      "fg": "#F2F1EC",
      "h": "ReturnReview",
      "w": "Computer Vision + LLM",
      "s": "Production",
      "m": "LIVE",
      "p": "Evidence-based product return inspection with visual verification, damage localization, grounded AI review and human final decision."
    },
    {
      "bg": "#0B0B0C",
      "fg": "#F2F1EC",
      "h": "Skylark Command",
      "w": "Decision Intelligence",
      "s": "Deployed",
      "m": "LIVE",
      "p": "Operational command surface with deterministic business metrics and bounded AI interpretation."
    },
    {
      "bg": "#E4452F",
      "fg": "#FFFFFF",
      "h": "NoCodeML",
      "w": "Machine Learning Platform",
      "s": "Validated",
      "m": "100K+",
      "p": "Browser-based experimentation workflows for preprocessing, model comparison, feature importance and batch prediction."
    },
    {
      "bg": "#F2F1EC",
      "fg": "#0B0B0C",
      "h": "Realtime Product Systems",
      "w": "Imposter X · Vibify · MostLikely",
      "s": "Shipped",
      "m": "SYNC",
      "p": "Room state, live presence, synchronized media, voting and multiplayer interactions across real devices."
    }
  ],
  "now": [
    [
      "currently",
      "Building products, preparing for software + AI roles"
    ],
    [
      "status",
      "Open to opportunities and relocation"
    ]
  ],
  "caps": [
    [
      "Applied AI",
      "Applied AI and LLM systems with grounded workflows",
      230,
      110,
      126,
      108
    ],
    [
      "Computer Vision",
      "Computer vision pipelines, evaluation and evidence",
      230,
      152,
      336,
      112
    ],
    [
      "Realtime",
      "Realtime rooms, synchronization and presence",
      230,
      194,
      331,
      240
    ],
    [
      "Full-Stack",
      "Full-stack products from interface to deployment",
      230,
      236,
      129,
      240
    ],
    [
      "Backend & APIs",
      "Backend services, APIs and system integration",
      230,
      272,
      184,
      316
    ],
    [
      "Data & ML",
      "Data workflows, model evaluation and analytics",
      230,
      442,
      276,
      316
    ],
    [
      "Product Eng.",
      "Product engineering with QA, polish and iteration",
      230,
      484,
      402,
      398
    ]
  ]
};
