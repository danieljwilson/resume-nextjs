import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Daniel J Wilson",
  initials: "DJW",
  location: "Montreal, Canada, EST",
  locationLink: "https://www.google.com/maps/place/Montreal",
  about:
    "Decision neuroscience, cognitive psychology & computational social science",
  summary:
    "I am currently completing my PhD examing the Intention-Behavior Gap through multi-modal analysis of intensive longitudinal data collected from self-report and digital trace data using smartphones and wearables.",
  avatarUrl: "https://pbs.twimg.com/profile_images/1743364953304637440/0hJHcJUK_400x400.jpg",
  personalWebsiteUrl: "https://www.danieljwilson.com",
  contact: {
    email: "daniel.j.wilson@gmail.com",
    tel: "+13109909163",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/danieljwilson",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/danieljwilson/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/_danieljwilson_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Toronto Doctoral Completion Award",
      degree: "",
      start: "2023",
      end: "2024",
    },
    {
      school: "Schwartz Reisman Institute Graduate Fellowship",
      degree: "",
      start: "2021",
      end: "2023",
    },
    {
      school: "Apple Health Research Partnership",
      degree: "",
      start: "2021",
      end: "2023",
    },
    {
      school: "Natural Sciences and Engineering Research Council of Canada Scholarship",
      degree: "",
      start: "2018",
      end: "2023",
    },
    {
      school: "Michael Smith Foreign Study Supplement",
      degree: "",
      start: "2018",
      end: "2019",
    },
    {
      school: "Franco Vaccarino UTSC Graduate Scholarship",
      degree: "",
      start: "2017",
      end: "2018",
    },
    {
      school: "Massey College Junior Fellow",
      degree: "",
      start: "2017",
      end: "2018",
    },
  ],
  work: [
    {
      company: "University of Toronto",
      link: "https://www.utoronto.ca/",
      badges: ["PhD"],
      title: "Decison Neuroscience Lab, Faculty of Psychology",
      logo: "", // Add logo if available
      start: "2017",
      end: "2024🍼",
      description:(
        <>
          <li>
            Developed a novel measure of the Intention-Behavior Gap, and directed the collection of novel intensive longitudinal data 
            - both digital trace and self report - with a breadth and level of granularity atypical for the field. 
            Developed predictive machine learning models of state-level gap dynamics using this data.
          </li>
          <li>
            Examined the effects of online advertising on user affect using large-scale Twitter data and NLP. 
          </li>
          <li>
            Ran a fMRI neuroimaging study looking at the effects of mindset on food preference and healthy eating.
          </li>
          <hr style={{ height: '5px', visibility: 'hidden' }} />

           🍼 <i>Took two years of parental leave during this time to care for three new research assistants </i> 
          <a href="https://www.danieljwilson.com/media/images/kids.jpg" target="_blank">[1]</a>
        </>
      ),
    },
    {
      company: "University of Toronto",
      link: "https://www.utoronto.ca/",
      badges: ["MA"],
      title: "Decision Neuroscience Lab, Faculty of Psychology",
      logo: "", // Add logo if available
      start: "2016",
      end: "2017",
      description:
        "I left a career split between documentary film and art to begin a PhD. Having never taken a Psychology or Neuroscience course prior to beginning my PhD my first year involved considerable amounts of remedial learning. I also completed a masters dissertation that looked at the contextual valuation and weighting of attributes in multi-attribute choice.",
    },
    
  ],
  skills: [
    "Machine Learning",
    "Deep Learning",
    "LLMs",
    "Data Science",
    "Data Visualization",
    "Computational Modeling",
    "Statistical Analysis",
    "Experimental Design",
    "Digital Trace Data",
    "Time Series Analysis"
  ],

  tools: [
    "Python",
    "R",
    "SQL",
    "SciKit Learn",
    "Tensorflow",
    "VS Code",
    "Jupyter",
    "RStudio",
    "Quarto",
    "Streamlit",
    "Shiny",
    "Tableau",
    "Airtable",
    "Qualtrics",
    "Adobe Suite",
    "Microsoft Suite",
  ],

  projects: [
    {
      title: "Documentary Filmmaker",
      techStack: ["PBS", "Showtime", "Criterion", "A&E", "Discovery", "Viceland"],
      description:(
        <>
        <b>Selected Work</b>
          <li>
            Editor and producer on a number of investigative journalism projects for PBS Frontline, 
            including the Emmy-nominated <i>A Death in St. Augustine</i> <a href="https://www.pbs.org/wgbh/frontline/documentary/death-in-st-augustine/?" target="_blank">[2]</a>, in
            collaboration with the New York Times. 
          </li>
          <li>
            Editor on the inaugural season of The Circus <a href="https://www.nytimes.com/2016/03/03/arts/television/circus-showtime-review.html" target="_blank">[3]</a>.
          </li>
          <li>
            Co-director and editor of the short film <i>Alvaro</i> <a href="https://lossur.es/short-docs/alvaro/" target="_blank">[4]</a>, 
            produced while a fellow at UnionDocs, which was later screened at MoMA PS1 and acquired by Criterion.
          </li>
        </>
      ),
      link: {
        label: "Documentary Filmmaker",
        href: "",
      },
    },
    {
      title: "Artist",
      techStack: ["performance", "video", "vr", "multi-media", "web"],
      description:(
        <>
        <b>Selected Work</b>
          <li>
            Co-founder of the minutiae app. An anti-social media art project launched 
            on a whim in collaboration with <i>ustwo</i> which has now developed a dedicated community 
            of participants <a href="https://www.wired.com/2017/05/minutiae-curious-app-captures-unfiltered-life/" target="_blank">[5]</a>.
          </li>
          <li>
            Works have been shown at MoMA PS1, The New Museum, the Centre Pompidou, 
            collected in the Columbia University Rare Books archive (their first app) and covered 
            in the Wall Street Journal <a href="https://www.wsj.com/articles/selfies-and-auto-dialing-as-art-in-miami-1439999544" target="_blank">[6]</a> and
            the New York Times <a href="https://www.nytimes.com/2013/03/18/nyregion/cab-riders-riffs-secretly-recorded-for-the-sake-of-art.html" target="_blank">[7]</a>.
          </li>
          <li>
            Selected for a $120k grant from the Canada Council for the Arts that paired five Canadian artists 
            with five Canadian scientists. Developed a VR experience where the audience explored the reciprocal space of a lysozyme molecule.
          </li>
          <li>
            Selected as a resident at NEW INC. <a href="https://www.newinc.org/" target="_blank">[8]</a>, 
            a UnionDocs Fellow <a href="https://uniondocs.org/" target="_blank">[9]</a>, 
            and a participant in The School for Poetic Computation <a href="https://sfpc.study/" target="_blank">[10]</a>.
          </li>
        </>
      ),
      link: {
        label: "Artist",
        href: "",
      },
    },

  ],
  clients: [
    {
      title: "Summer Institute on Bounded Rationality",
      techStack: ["boosting", "nudging", "behavioral economics"],
      description: (
        <>
          <b>2023 | Max Planck Institute for Human Development, Berlin</b><br></br><br></br>
          Brings together talented early-career researchers and renowned scientists to spark a dialogue about decision making under the real-world constraints of limited time, information, and computational power.
        </>
      ),
      link: {
        label: "mpib-berlin.mpg.de/research/research-centers/adaptive-rationality/summer-institute",
        href: "https://www.mpib-berlin.mpg.de/research/research-centers/adaptive-rationality/summer-institute",
      },
    },
    {
      title: "Oxford Machine Learning Summer School",
      techStack: [
        "machine learning",
        "deep learning",
        "summer school",
      ],
      description: (
        <>
          <b>2021 | AI for Global Goals, in partnership with CIFAR and the University of Oxford&apos;s Deep Medicine program</b><br></br><br></br>
          The world&apos;s largest advanced AI bootcamp, offering cutting edge course in ML/DL.<br></br><br></br>
          5% acceptance rate
        </>
      ),
      link: {
        label: "oxfordml.school",
        href: "https://www.oxfordml.school/",
      },
    },
    {
      title: "Civic Innovation Corps",
      techStack: ["data science", "data visualization", "shiny", "fellowship"],
      description: (
        <>
          <b>2021 | NYC Office for Economic Opportunity</b><br></br><br></br>
          Run by Coding it Forward, the Civic Innovation Corps aims to provide opportunities for early-career 
          mission-driven technologists to explore careers in public service.<br></br><br></br>
          3.6% acceptance rate
        </>
      ),
      link: {
        label: "codingitforward.com/",
        href: "https://www.codingitforward.com/",
      },
    },
    {
      title: "Neuromatch Academy",
      techStack: ["neuroscience", "machine learning", "causality", "summer school"],
      description: (
        <>
          <b>2020 | Online</b><br></br><br></br>
          Computational neuroscience program teaching cutting-edge advances in machine learning and causality research with a focus on interpretability and the process of modeling.
        </>
      ),      link: {
        label: "academy.neuromatch.io/courses",
        href: "https://academy.neuromatch.io/courses",
      },
    },
    {
      title: "Kavli Summer Institute in Cognitive Neuroscience",
      techStack: [
        "cognitive neuroscience",
        "summer school",
        "fellowship"
      ],
      description: (
        <>
          <b>2019 | UC Santa Barbara</b><br></br><br></br>
          Renowned interdisiplinary hands-on program that focuses on advancing knowledge and research in the field of cognitive neuroscience. 
        </>
      ),
      link: {
        label: "jinhyuncheong.com/jekyll/update/2019/07/08/BrainCamp.html",
        href: "https://jinhyuncheong.com/jekyll/update/2019/07/08/BrainCamp.html",
      },
    },
    {
      title: "Computational and Mathematical Modeling of Cognition",
      techStack: ["modeling", "summer school", "cognitive psychology"],
      description: (
        <>
          <b>2018 | Couches, France</b><br></br><br></br>
          Methods and applications of computational models for understanding human cognition and behavioral processes.
        </>
      ),
        link: {
        label: "sites.uci.edu/cmmc/",
        href: "https://sites.uci.edu/cmmc/",
      },
    },
    {
      title: "Kording Lab",
      techStack: ["visiting scholar", "econometrics", "machine learning"],
      description: (
        <>
          <b>2018 | University of Pennsylvania</b><br></br><br></br>
          Large scale investigation of the effects of online advertising on user affect, employing natural experimental techniques and NLP.
        </>
      ),
      link: {
        label: "kordinglab.com",
        href: "https://kordinglab.com",
      },
    },
    {
      title: "Summer School In Social Neuroscience and Neuroeconomics",
      techStack: [
        "neuroscience",
        "neuroeconomics",
        "summer school",
      ],
      description: (
        <>
          <b>2017 | Duke University</b><br></br><br></br>
          Integrative approach directed by Molly Crockett, Gregory Samanez-Larkin, Jamil Zaki, and Kendra Seaman.
        </>
      ),
      link: {
        label: "facebook.com/socialneuroecon",
        href: "https://www.facebook.com/socialneuroecon",
      },
    },
  ],
} as const;
