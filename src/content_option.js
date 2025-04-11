const logotext = "ANURAGI";
const meta = {
    title: "Anuragi Thapliya",
    description: "I'm Anuragi, a recent robotics engineering graduate.",
};

const introdata = {
    title: "Hi! I'm Anuragi Thapliya",
    animated: {
        first: "I'm a robotics engineer",
        second: "I'm a computer scientist",
        third: "I'm a classical pianist",
        fourth: "I'm a plants enthusiast"
    },
    description: "Welcome to my website! I am a recent robotics engineering graduate. I want to design intelligent systems that can make a difference and be accessible to everyone.",
    your_img_url: "/portfoliopics/headshot.jpg",
};

const dataabout = {
    title: "Bio",
    aboutme: "I graduated Worcester Polytechnic Institute (WPI) in Spring 2025 with a Bachelor of Science in Robotics Engineering and a minor in Computer Science. I am passionate about designing intelligent systems that can make a difference and be accessible to everyone. I have experience in robotics, computer vision, machine learning, and software development. In my free time, I enjoy playing the piano, hiking, and taking care of my plants.",
};
const worktimeline = [{
        jobtitle: "Product Engineer Intern",
        where: "Universal Robots",
        date: "2024-2025",
    },
    {
        jobtitle: "Reliability/Manufacturing Engineer Intern",
        where: "Brooks Automation",
        date: "2023",
    },
    {
        jobtitle: "Crimson Key Campus Tour Manager",
        where: "WPI",
        date: "2022-2025",
    },
];

const skills = [{
        name: "Languages: Python, C/C++, Java, Javascript",
        // value: 90,
    },
    {
        name: "Tools: ROS/ROS2, PyTorch, Git/Github, OpenCV",
        // value: 85,
    },
    {
        name: "Applications/Software: SolidWorks, MATLAB, VSCode, Jupyter, Salesforce, Jira",
        // value: 80,
    },
    {
        name: "Operating System: Windows, Linux, MacOS",
        // value: 60,
    },
    {
        name: "Manufacturing: 3D-Printing, Laser Cutting, Soldering",
        // value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "/portfoliopics/full_assembly.png",
        title: "Remote Center of Motion Surgical Manipulator",
        description: "This project was about the design and implementation of a new surgical manipulator for Robot-Assisted Minimally Invasive Surgery (RMIS). The manipulator uses a two-degree-of-freedom (DoF) remote-center-of-motion (RCM) mechanism that provides pitch and translation. This design improves kinematic performance while reducing the system's footprint. A prototype was built and tested to demonstrate the manipulator’s stability, precision, and usability. This manipulator was integrated with a Sigma.7 haptic feedback controller using ROS2.",
        link: "https://drive.google.com/file/d/1XEFWqnUQLnpc0eEm57h_PyZx2grmfWUz/view?usp=sharing",
    },
    {
        img: "/portfoliopics/object_grasp_points.png",
        title: "Identifying Stable Grasp Points for Irregular 3D Objects",
        description: "For this project, my team and I focused on determining the best grasp for 3D objects in 2D planar space. This project was interesting because it allowed us to find grasps for unknown, non-uniform objects, which are common in real-world environments. These objects often have irregular surfaces, making stable grasping difficult. We used the Point Cloud Library (PCL) to process and visualize the objects' top surfaces, then employed OpenCV to identify the best grasp.",
        link: "https://drive.google.com/file/d/1FrUrukUaDD4MRoaB49Y7h9JnC85JY5B5/view?usp=sharing",
    },
    {
        img: "/portfoliopics/bomberman.png",
        title: "AI Bomberman Reinforcement Learning Agent",
        description: "To train the agent in a Bomberman game, an Approximate Q-Learning Algorithm was implemented. The agent was tasked with bombing its way to the exit while avoiding monsters. The agent used an epsilon-greedy strategy to explore and exploit actions, including placing bombs or moving to neighboring cells. The training involved creating a q-value table for each scenario, with rewards based on the agent’s proximity to monsters, the exit, and bomb explosions. This system guided the agent toward efficient decision-making.",
        link: "https://drive.google.com/file/d/1J9Br6niYkhl-N1c7oLLgRbY8HvkxY-Lq/view?usp=sharing",
    },
    {
        img: "/portfoliopics/mapping.png",
        title: "Aerial Mapping for Urban Planning",
        description: "This project aimed to create updated maps of Akyem Dwenase, a rural village in Ghana, where no official map had been available since 2012. By applying cross-cultural design principles, we collaborated with the community to produce both an aerial map and a user-friendly community map. These maps will help village leadership plan for future development while preserving the community's identity and fostering pride. We believe this collaborative approach can be applied globally to honor cultural aspirations in project design.",
        link: "https://drive.google.com/file/d/1J9Br6niYkhl-N1c7oLLgRbY8HvkxY-Lq/view?usp=sharing",
    },
    {
        img: "/portfoliopics/dynamic.jpg",
        title: "Color-Based Object Sorting/Dynamic Tracking Arm",
        description: "This project utilized a 4-DOF robotic arm to pick up and sort colored balls. The robot and camera were used for perception and manipulation within a checkerboard area. My team and I applied forward and inverse kinematics to calculate the arm’s position and determine joint angles. Trajectory generation ensured smooth motion between points, while differential kinematics controlled velocities. Computer vision allowed real-time object detection, enabling the robotic sorting system.",
        link: "https://drive.google.com/file/d/19vNU_jZJeYx8PDrPFpqxykRbOVgsBmb_/view?usp=sharing",
    },
    {
        img: "/portfoliopics/Localization2.png",
        title: "Autonomous Navigation and SLAM Implementation",
        description: "For this project, we used Python, ROS, and a Turtlebot3 to map, navigate, and localize within a 2m x 1m tabletop field. The map was created with Gmapping, navigation paths were generated using A*, and the robot localized with AMCL. This was first completed in simulation using rViz, then successfully implemented on the physical robot. I was responsible for the localization algorithm to ensure the robot was able to accurately determine its position within the map.",
        link: "https://drive.google.com/file/d/154NkjiijBfqEbjT5e1PxTBMgQComhhMB/view?usp=sharing",
    },
];

const contactConfig = {
    YOUR_EMAIL: "athapliya@wpi.edu",
    YOUR_FONE: "https://www.linkedin.com/in/athapliya/",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    // YOUR_SERVICE_ID: "service_id",
    // YOUR_TEMPLATE_ID: "template_id",
    // YOUR_USER_ID: "user_id",
};

const socialprofils = {
    // github: "https://github.com",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/athapliya/",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};