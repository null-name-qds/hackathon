import styled from 'styled-components';

const Header = styled.p`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-family: 'Quicksand', sans-serif;
  font-Weight: ${props => props.weight};
  text-align: ${props => props.textAlign};
  display: ${props => props.display};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  border-left: ${props => props.borderLeft};
`;

export function Typography({
    size = '1rem',
    color = '#7E6DE7',
    weight = '400',
    text = 'Typography',
    textAlign = 'left',
    display = 'block',
    margin = '0',
    lineHeight = 'inherit',
    overflow = 'visible',
    padding = '0',
    width = 'auto',
    borderLeft = 'inherit',
    position = 'inherit',
    ...otherProps
}) {
    return (
        <Header width={width} borderLeft={borderLeft} padding={padding} lineHeight={lineHeight} overflow={overflow} size={size} color={color} weight={weight}
            margin={margin} display={display} textAlign={textAlign} {...otherProps}>
            {text}
        </Header>
    );
}