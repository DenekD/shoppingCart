import React, { useContext } from 'react';
import { CategoriesContext } from '../../context/categoriesContext';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  option: {
    color: '#232f3e',
  },
}));

export default function HeaderDropDownManu() {
  const context = useContext(CategoriesContext);

  const classes = useStyles();
  const [state, setState] = React.useState({
    category: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple" style={{ fontSize: 13 }}>
          Category
        </InputLabel>
        <Select
          disableUnderline={true}
          autoWidth={true}
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'category',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" className={classes.option} />
          {context.categories.map((cat) => (
            <option className={classes.option} key={cat.name}>
              {cat.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
