/*
Introduction: Share your name, professional title, and a concise summary of your expertise or passion.

Background: Provide an overview of your educational background, including relevant degrees, certifications, or courses you have completed. Mention any notable achievements or honors.

Experience: Highlight your work experience, focusing on roles and projects that are relevant to your field or the services you offer. Include company names, job titles, and a summary of your responsibilities and accomplishments.

Skills: List the key skills and competencies you possess that are relevant to your profession. This can include technical skills, software proficiency, languages spoken, or any other specialized expertise you have gained.

Portfolio: Showcase examples of your best work by including a portfolio section. Display screenshots, links, or descriptions of projects you have completed. This allows visitors to see your capabilities firsthand.

Achievements and Recognition: If you have received any awards, accolades, or recognition for your work, be sure to mention them. This helps establish credibility and demonstrates your commitment to excellence.

Interests and Passions: Share your personal interests and hobbies that relate to your professional field. This adds a personal touch and helps visitors connect with you on a more human level.

Values and Mission: Express your professional values and the mission that drives your work. Let visitors understand the principles you uphold and the purpose behind what you do.

Testimonials: Include testimonials or quotes from previous clients, employers, or colleagues who can vouch for your skills and work ethic. This social proof can enhance your credibility and trustworthiness.

Contact Information: Finally, make sure to provide clear contact information, such as your email address, phone number, and links to your social media profiles or professional networking sites. This makes it easy for potential clients or employers to reach out to you.
*/
import "./AboutMe.css"
import about_me_str from "/aboutme.txt"
import React, { useEffect, useState } from 'react';

const AboutMeDiv: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>('');

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(about_me_str); // Adjust the file path if needed
        const content = await response.text();
        setFileContent(content);
      } catch (error) {
        console.error('Error fetching file content:', error);
      }
    };

    fetchFileContent();
  }, []);

  const paragraphs = fileContent.split('<br>').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div id="AboutMeDiv">
        <h1> About Me </h1>
        {paragraphs}
        <h2> Contact Me </h2>
        <p> ajdalesandro0115@gmail.com </p>
    </div>
  )
};

export default AboutMeDiv;