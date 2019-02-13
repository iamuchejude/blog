export const generateSnippet = content => content.toString().split(' ').splice(0, 30).join(' ') + '...';

export const sluggify = title => title.toString().toLowerCase().split(' ').splice(0, 5).join('-');

export const prettifyTime = time => time;

export const Tag = tags => (
  <ul>
    { tags.forEach((tag, i) => (
      <li key={ i }>
        <Link href={ `/articles/labels/${tag.toLowerCase()}` }>
          { tag }
        </Link>
      </li>
    )) }
  </ul>
);