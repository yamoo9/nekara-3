import { useTheme } from '../../contexts';

export const ThemeEx = ({ isDarkMode = false, ...restProps }) => {
  
  const themeValue = useTheme();
  const theme = themeValue[isDarkMode ? 'dark' : 'light'];
  

  return (
    <div
      lang="en"
      style={{
        maxWidth: 640,
        margin: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 30,
        borderRadius: 6,
        border: '3px solid currentColor',
        background: theme.background,
        color: theme.forground,
        lineHeight: theme.lineHeight,
      }}
      {...restProps}
    >
      <h1 style={{color: theme.accent}}>React Context - {'Theme Mode'} Design</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        quaerat nostrum nam accusantium in deserunt corporis voluptatem eius harum
        eligendi.
      </p>
    </div>
  )
};