import './style.css';

interface Props extends React.HTMLProps<HTMLInputElement> {
  value: string;
  handleChange: (val: string) => void;
};

const Input = ({ value, handleChange, ...rest }: Props) =>
  <div>
    <input className='input' value={value} onChange={e => handleChange(e.target.value)} {...rest} />
  </div>


export default Input
