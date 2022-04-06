import CssBaseline from '@mui/material/CssBaseline'
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
} from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import {
  useEffect,
  useState,
} from 'react'

export function App() {

  const [items, setItems] = useState([])
  const [currentValue, setCurrentValue] = useState('')
  const [sort, setSort] = useState('asc')

  const clear = () => {
    setItems([])
    setCurrentValue('')
  }

  useEffect(
    () => {
      if (sort === 'asc') {
        setItems([...items.sort()])
      } else {
        setItems([...items.reverse()])
      }
    },
    [sort],
  )

  return <Container
    component="main"
    maxWidth="xs"
  >
    <CssBaseline/>
    <Box
      component="form"
      onSubmit={(evt) => evt.preventDefault()}
      noValidate
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="item"
        label="Add Item"
        name="item"
        autoFocus
        onChange={(evt) => {
          setCurrentValue(evt.target.value)
        }}
        onKeyDown={(evt) => {
          if (evt.key === 'Enter' && currentValue !== '') {
            setItems([
              ...items,
              currentValue,
            ])
            setCurrentValue('')
          }
        }}
        value={currentValue}
      />
      <Grid container>
        <Grid
          item
          xs={11}
        >
          <ul>
            {items.map((item, i) => <li
              key={i}
            >{item}</li>)}
          </ul>
        </Grid>
        <Grid
          item
          xs={1}
        >
          {items.length > 0 && (
            <IconButton
              onClick={() => {
                setSort(sort === 'asc' ? 'desc' : 'asc')
              }}
              aria-label="sort"
            >
              {sort === 'desc' ? <ArrowDownwardIcon/> : <ArrowUpwardIcon/>}
            </IconButton>
          )}
        </Grid>
        <Grid
          item
          xs={5}
        >
          <Button
            type="reset"
            fullWidth
            variant="contained"
            color="error"
            onClick={clear}
          >
            Clear
          </Button>
        </Grid>
        <Grid
          item
          xs={7}
        />
      </Grid>
    </Box>
  </Container>
}