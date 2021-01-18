import { createMuiTheme } from '@material-ui/core/styles';

const nlmBlack = "#0B0C10"
const nlmDrkBlue = "#1F2833"
const nlmLghtGrey = '#C5C6C7'
const nlmBrightBlue = '#66FCF1'
const nlmBlueGreen = '#45A29E'
export default createMuiTheme({
palette: {
    common: {
        black: `${nlmBlack}`,
       darkblue: `${nlmDrkBlue}`,
       lightgrey: `${nlmLghtGrey}`,
       brightblue: `${nlmBrightBlue}`,
       bluegreen: `${nlmBlueGreen}`

    },
    primary:{
        main: `${nlmDrkBlue}`
    },
    secondary:{
        main: `${nlmBrightBlue}`
    }
},
typography:{
   tab:{
    fontFamily: "Raleway",
    textTransform: "None",
    fontWeight: "700",
    fontSize: "1rem",
   },
   estimate:{
    fontFamily: 'Pacifico',
    fontSize: '1rem',
    textTransform: 'none',
    color: 'white'
   }
}
});