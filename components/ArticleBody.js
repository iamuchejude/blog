import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import  * as styles from 'react-syntax-highlighter/dist/styles/prism';

const code = `const age = 18;

if (age >= 18) {
  console.log('You are good to vote');
} else {
  console.log('You are too young to vote);
}
`;

const phpCode = `$age = 18;

if ($age >= 18) {
  echo 'You are good to vote';
} else {
  echo 'You are too young to vote';
}
`;
export default ({ article: { body }}) => (
  <div className="articleBody">
    <div className="body">
        <p>I shared this message with my group of friends and I thought it wise to publish here also.</p>

        <p>Guys,</p>

        <p>We all have to Challenge ourselves to be better next year.</p>

        <p>Career wise, relationships, social life. Hold yourself to a greater calling.</p>

        <p>Be <a href="">kind to people</a>, treat people with respect. Understand that each and everyone you meet is different. Be a people person, but also, have a limit.</p>

        <p>Take your time to appreciate those around you, don't wait till the end of the year to do that. Don't wait for them to pass on before writing an eulogy.</p>

        <p>Give yourself unreasonably broad goal for the year, e.g, you want to get a 7 figure job, then break it down to smaller goals and bits, then walk your way up.</p>

        <p>Take care of your emotional health, don't be scared to cut off friends that don't contribute to your goals/dreams.</p>

        <p>Don't be scared to block people on WhatsApp and other social media platform. Don't be stingy with yourself, have fun when you can. Spend on yourself.</p>

        <SyntaxHighlighter
          language='javascript'
          style={ styles.solarizedlight }
          wrapLines={ true }
          customStyle={
            {
              text: 'hello'
            }
          }
        >
            { code }
        </SyntaxHighlighter>

        <p>Have a smaller tight circle, make sure those in the circle push you to be a better version of you.</p>

        <p>Take care of your health, sleep well. Don't ignore those little headaches, your body is warning you.</p>

        <p>Apply for scholarships/Jobs that are even way beyond your scope. Learn from the rejections.</p>

        <p>Do you wish to relocate to a different country? Make intentional plans towards it. Put your plans into action.</p>

        <p>Deliberately make out time to spend with your family, they've been there for your through thick and thin. Appreciate them.</p>

        <SyntaxHighlighter
          language='php'
          style={ styles.solarizedlight }
          wrapLines={ true }
        >
            { phpCode }
        </SyntaxHighlighter>

        <p>Read more, more articles, watch more YouTube videos about things way beyond your field.</p>

        <p>After today, 12 more months before the end of another year, make it count.</p>

        <p>Be Better!</p>
    </div>
    
    <style jsx>{`
      .articleBody {
        padding: 0;
      }

      pre, code {
        color: #f1f1f1;
      }

      .body {
        font-weight: 300;
      }

      .body p {
        margin: 15px 0;
      }

      .body figure {
        max-width: 100%;
        margin: 20px 0;
      }

      .body img {
        max-width: 100%;
      }

      .body .
      
      .body div {
        margin: 20px 0;
      }

      .body a {
        font-weight: 400;
        cursor: pointer;
        border-bottom: 1px dotted #333;
      }

      .body h1, .body h2 {
        margin: 15px 0;
      }
      
      .body h1 {
        font-size: 1.4em;
      }

      .body h2 {
        font-size: 1.2px;
      }

      .body h3 {
        font-size: 1.1em;
      }
    `}</style>
  </div>
);
