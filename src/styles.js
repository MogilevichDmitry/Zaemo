import getMuiTheme from 'material-ui/styles/getMuiTheme';
import purchaseCheckoutBg from './images/layout/myPassesBg.jpg';
import purchasePaymentBg from './images/layout/myPassesBg.jpg';
import purchaseSelectPassBg from './images/layout/myPassesBg.jpg';
import uiMobileMyPassAtiveBg from './images/layout/myPassesBg.jpg';
import uiMobileMyPassExpiredBg from './images/layout/myPassesBg.jpg';
import uiMobileMyPassReadyBg from './images/layout/myPassesBg.jpg';
import loginBgMobile from './images/layout/loginBgMobile.jpg';
import loginBgDesktop from './images/layout/loginDesktopBg.jpg';

export const muiTheme = getMuiTheme({
  fontFamily: 'Ubuntu, san-serif',
  palette: {
    primary1Color: '#4877f9',
    accent1Color: '#4877f9',
  },
  tabs: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

export const puchaseCheckout = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: `url(${purchaseCheckoutBg})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    fontFamily: 'Ubuntu',
    color: 'white',
    fontSize: '13px',
  },
  appBar: {
    background: 'none',
  },
  appBarLeftInfo: {
    fontSize: '13px',
    color: '#cccccc',
  },
  appBarRightIcon: {
    margin: 'auto',
  },
  main: {
    flex: '1',
    padding: '0 10px',
  },
  passInfo: {
    marginBottom: '20px',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '17px',
    marginBottom: '15px',
    borderBottom: '1px solid white',
  },
  headingText: {
    alignSelf: 'center',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  optionsFlexStart: {
    display: 'flex',
  },
  option: {
    marginRight: '20px',
    marginBottom: '20px',
  },
  optionFlexStart: {
    marginRight: '50px',
    marginBottom: '20px',
  },
  optionName: {
    color: '#cccccc',
    marginBottom: '10px',
  },
  partner: {
    margin: '5px 0 13px',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  number: {
    marginTop: '13px',
  }
};
export const purchasePaymentInfo = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: `url(${purchasePaymentBg})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    fontFamily: 'Ubuntu',
    color: 'white',
    fontSize: '13px',
  },
  appBar: {
    background: 'none',
  },
  appBarLeftInfo: {
    fontSize: '13px',
    color: '#cccccc',
  },
  appBarRightIcon: {
    margin: 'auto',
  },
  hint: {
    color: '#cccccc',
    zIndex:'123',
    fontSize: '13px',
  },
  main: {
    flex: '1',
    padding: '0 25px',
  },
  boxRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 0',
  },
  fieldName: {
    color: 'white',
  },
  fieldCardNumber: {
    flex: '0.61',
    color: 'white',
  },
  fieldCvv: {
    flex: '0.32',
    color: 'white',
  },
  checkbox: {
    width: '100%',
    marginTop: '30px',
  },
  checkboxLabel: {
    color: 'white',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '15px',
  },
};
export const purchaseSelectPass = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: `url(${purchaseSelectPassBg})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    fontFamily: 'Ubuntu',
    color: 'white',
    fontSize: '13px',
  },
  appBar: {
    background: 'none',
  },
  appBarLeftInfo: {
    fontSize: '13px',
    color: '#cccccc',
  },
  appBarRightIcon: {
    margin: 'auto',
  },
  hint: {
    color: '#cccccc',
    zIndex:'123',
    fontSize: '13px',
  },
  main: {
    flex: '1',
    padding: '0 10px',
  },
  selectField: {
    width: '50%',
  },
  boxColumn: {
    margin: '30px 0 15px',
  },
  heading: {
    fontSize: '17px',
    paddingBottom: '7px',
    marginBottom: '15px',
    borderBottom: '1px solid white',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  option: {
    marginRight: '20px',
    marginBottom: '20px',
  },
  optionName: {
    color: '#cccccc',
    marginBottom: '10px',
  },
  partner: {
    margin: '5px 0 13px',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  number: {
    marginTop: '13px',
  }
};

export const registerStepOne = {
  appBar: {
    backgroundColor: '#162233',
  },
  appBarButton: {
    color: '#4877f9',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: '17px',
    fontWeight: '500',
    color: '#4d4d4d',
    marginBottom: '6%',
  },
  personalInfo: {
    padding: '6% 4% 6% 6%',
  },
  fieldLabel: {
    color: 'rgba(153, 153, 153, 1)',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  fieldsBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  fieldsBoxField: {
    width: '46%',
  },
  selectFieldIcon: {
    fill: '#4877f9',
  },
  checkbox: {
    margin: '4% 0'
  },
  checkboxIcon: {
    fill: '#4877f9',
  },
};
export const registerStepTwo = {
  appBar: {
    backgroundColor: '#162233',
  },
  appBarButton: {
    color: '#4877f9',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: '17px',
    fontWeight: '500',
    color: '#4d4d4d',
    marginBottom: '20px',
  },
  workoutPreferences: {
    padding: '6% 4% 3% 6%',
  },
  description: {
    fontFamily: 'Ubuntu',
    color: '#999999',
    fontSize: '14px',
    marginBottom: '3.3%',
  },
  checkbox: {
    margin: '2.5% 0',
    fontWeight: '300',
    fontSize: '14px',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '10px',
  },
  button: {
    width: '100%',
  },
};
export const registerStepThree = {
  stepThree: {
    display: 'flex',
    flexDirection: 'column',
  },
  appBar: {
    backgroundColor: '#162233',
  },
  appBarButton: {
    color: '#4877f9',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: '17px',
    fontWeight: '500',
    color: '#4d4d4d',
    marginBottom: '25px',
  },
  conditions: {
    padding: '12% 4% 4% 6%',
  },
  description: {
    fontFamily: 'Ubuntu',
    color: '#999999',
    fontSize: '14px',
    marginBottom: '12%',
  },
  checkbox: {
    fontSize: '14px',
  },
  checkboxIcon: {
    fill: '#4877f9',
  },
  button: {
    width: '100%',
    position: 'absolute',
    bottom: '0',
  },
};

export const settingsCommon = {
  wrapper: {
    fontFamily: 'Ubuntu',
    color: 'black',
    paddingBottom: '45px',
    '@media (min-width: 770px)': {
      background: '#f2f2f2',
    },
  },
  main: {
    margin: '0 auto',
    '@media (min-width: 770px)': {
      maxWidth: '700px',
      textAlign: 'center',
    },
    '@media (min-width: 960px)': {
      maxWidth: '820px',
    },
  },
  onlyMobile: {
    '@media (min-width: 770px)': {
      display: 'none',
    },
  },
  onlyDesktop: {
    '@media (max-width: 770px)': {
      display: 'none',
    }
  },
  appBar: {
    background: '#162233',
  },
  content: {
    '@media (max-width: 770px)': {
      padding: '15px 2.5% 0',
    },
    '@media (min-width: 770px)': {
      marginTop: '40px',
    },
  },
  heading: {
    fontSize: '17px',
    fontWeight: '500',
    marginBottom: '15px',
    textAlign: 'center',
  },
  settingsBox: {
    '@media (max-width: 770px)': {
      padding: '4% 4.5%',
      borderBottom: '1px solid #d9d9d9',
    },
    '@media (min-width: 770px)': {
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      marginBottom: '15px',
      padding: '20px 35px 35px',
    },
  },
  settingsBoxLast: {
    padding: '4% 4.5%',
  },
  title: {
    fontSize: '17px',
    fontWeight: '500',
    marginBottom: '30px',
    '@media (max-width: 770px)': {
      color: '#4d4d4d',
      marginBottom: '10px',
    },
  },
  checkboxGroup: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  checkbox: {
    textAlign: 'left',
    marginBottom: '14px',
    width: 'auto',
    minWidth: '186px',
    fontWeight: '300',
    fontSize: '13px',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '10px',
  },
  boxColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  boxRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  fieldName: {
    flex: '0.72',
    fontSize: '14px',
  },
  fieldPhone: {
    flex: '0.24',
    fontSize: '14px',
  },
  fieldEmail: {
    flex: '0.47',
    fontSize: '14px',
  },
  fieldPassword: {
    flex: '0.47',
    fontSize: '14px',
  },
  fieldDate: {
    flex: '0.24',
    fontSize: '14px',
  },
  cardInformation: {
    display: 'flex',
  },
  fieldCardNumber: {
    flex: '0.25',
    fontSize: '14px',
    marginRight: '20px',
  },
  fieldCvv: {
    flex: '0.12',
    fontSize: '14px',
  },
  buttonBox: {
    marginTop: '30px',
  },
  link: {
    textDecoration: 'none',
    color: '#666666'
  },
};
export const settingsPaymentInfo = {
  appBar: {
    backgroundColor: '#162233',
  },
  appBarButton: {
    color: '#4877f9',
  },
  wrapper: {
    padding: '4% 5%',
  },
  inputField: {
    fontSize: '14px',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  boxRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  fieldCard: {
    flex: '0.70',
  },
  fieldCvv: {
    flex: '0.25',
  },
  fieldDate: {
    width: '40%',
  },
};
export const settingsPersonalInfo = {
  appBar: {
    backgroundColor: '#162233',
  },
  appBarButton: {
    color: '#4877f9',
  },
  wrapper: {
    padding: '4% 5%',
  },
  inputField: {
    fontSize: '14px',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  boxRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  fieldNumber: {
    flex: '0.45',
  },
  fieldEmail: {
    flex: '0.45',
  },
  fieldPassword: {
    width: '50%',
  },
};
export const settingsWorkoutPreferences = {
  appBar: {
    backgroundColor: '#162233',
  },
  appBarButton: {
    color: '#4877f9',
  },
  workoutPreferences: {
    padding: '5% 4% 3% 6%',
  },
  checkbox: {
    margin: '2.5% 0',
    fontWeight: '300',
    fontSize: '14px',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '20px',
  },
};

export const uiDesktopMyPassActive = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  countDown: {
    fontSize: '13px',
    color: '#999999',
    margin: 'auto',
    maxWidth: '350px',
    textAlign: 'center',
  },
  countDownDescription: {
    marginBottom: '15px',
  },
  countDownTimer: {
    color: 'black',
    fontSize: '18px',
  },
  countDownTitle: {
    marginBottom: '10px',
    fontWeight: '500',
  },
  countDownValue: {
    fontWeight: '600',
    fontSize: '24px',
  },
  countDownTimeHint: {
    color: '#999999',
    marginRight: '7px',
    fontSize: '24px',
  },};
export const uiDesktopMyPassExpired = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  purchaseBoxHeading: {
    fontSize: '13px',
    color: '#999999',
  },
  purchase: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  purchaseMain: {
    flex: '0.35'
  },
  purchaseTitle: {
    fontSize: '17px',
    fontWeight: '500',
    color: 'black',
  },
  purchaseParam: {
    fontSize: '14px',
    color: '#999999',
  },
  purchaseParamValue: {
    marginTop: '8px',
    fontSize: '13.5px',
  },
  purchaseDescription: {
    marginTop: '8px',
    fontSize: '12.5px',
  },
  purchaseOption: {
    flex: '0.6',
    display: 'flex',
    justifyContent: 'space-between',
  },
  purchaseButtonLabel: {
    fontSize: '16px',
    fontWeight: '400',
    textTransform: 'none',
    padding: '10px 23px'
  },
};
export const uiDesktopMyPassGymPass = {
  wrapper: {
    paddingRight: '50px',
    marginBottom: '20px',
  },
  gym: {
    display: 'flex',
    marginBottom: '20px',
  },
  gymImageBox: {
    width: '140px',
  },
  gymImage: {
    width: '100%',
  },
  gymInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '10px 20px 5px',
  },
  gymTitle: {
    marginBottom: '5px',
    color: '#031021',
    fontWeight: '500',
    fontSize: '17px',
  },
  partner: {
    display: 'flex',
    fontSize: '13px',
    color: '#666666',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  gymContact: {
    fontSize: '14px',
    color: '#666666',
  },
  gymContactNumber: {
    marginTop: '6px',
  },
  gymButton: {
    alignSelf: 'flex-end',
    margin: '0 auto',
  },
  pass: {
    display: 'flex',
    flexDirection: 'column',
  },
  passTitle: {
    fontSize: '17px',
    color: 'black',
    fontWeight: '500',
    marginBottom: '10px',
  },
  options: {
    display: 'flex',
    fontSize: '13px',
    justifyContent: 'space-between',
  },
  instruction: {
    marginTop: '30px',
    fontSize: '13px',
  },
  optionName: {
    color: '#999999',
    marginBottom: '15px',
  },
  optionValue: {
    color: '#666666',
  },
};
export const uiDesktopMyPassReady = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  activate: {
    fontSize: '13px',
    color: '#999999',
    margin: 'auto',
    width: '350px',
    textAlign: 'center',
  },
  activateDescription: {
    marginBottom: '15px',
  },
  activateButton: {
    width: '70%',
  },
};

export const uiDesktopHeader = {
  main: {
    '@media (min-width: 770px)': {
      maxWidth: '750px',
      margin: '0 auto',
    },
    '@media (min-width: 960px)': {
      maxWidth: '920px',
      margin: '0 auto',
    },
    '@media (min-width: 1366px)': {
      maxWidth: '1040px',
      margin: '0 auto',
    },
    '@media (min-width: 1440px)': {
      maxWidth: '1124px',
      margin: '0 auto',
    },
    '@media (min-width: 1600px)': {
      maxWidth: '1400px',
      margin: '0 auto',
    },
  },
  header: {
    '@media (max-width: 770px)': {
      display: 'none'
    }
  },
  topBar: {
    background: '#031021',
    padding: '10px 0 6px',
  },
  headerBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    width: '102px',
    display: 'table',
    margin: 'auto 0 auto 10px',
  },
  profile: {
    display:'flex',
    fontFamily: 'Ubuntu',
    color: 'white',
  },
  profileName: {
    margin: 'auto',
    fontSize: '17px',
  },
  avatar: {
    backgroundColor: 'none',
    margin: 'auto',
    width: '44px',
  },
  bottomBar: {
    background: '#15335c',
  },
  bottomBarAside: {
    display: 'flex',
    position: 'relative',
  },
  bottomBarSearchHint: {
    color: '#dce1e7',
    bottom: '17px',
  },
  bottomBarSearchInput: {
    color: 'white',
  },
  bottomBarSearchUnderline: {
    borderColor: '#8a99ae',
    bottom: '1px',
  },
  bottomBarSearch: {
    position: 'absolute',
    width: '150px',
    left: '-133px',
    bottom: '0',
  },
  bottomBarSort: {
    display: 'flex',
    fontFamily: 'Ubuntu',
  },
  bottomBarSortDescription: {
    color: '#dce1e7',
    margin: 'auto 15px auto 37px',
  },
  bottomBarSortValue: {
    color: 'white',
    fontSize: '17px',
    margin: 'auto 0',
  },
  sortIcon: {
    fill: '#4877f9',
  },
  bottomBarSortButton: {
    width: 'auto',
    margin: 'auto',
  },
  bottomBarSortLabel: {
    color: 'white',
  },
};
export const uiDesktopModalWindow = {
  appBar: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    backgroundColor: '#162233',
  },
  children: {
    paddingTop: '60px',
  },
};
export const uiDesktopPurchase = {
  purchase: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  purchasePayment: {
    marginBottom: '25px',
  },
  purchaseBoxRow: {
    display: 'flex',
    alignItems: 'center',
  },
  purchaseTitle: {
    fontSize: '15px',
    color: 'black',
    fontWeight: '500',
    marginBottom: '5px',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  hint: {
    fontSize: '12px',
    paddingBottom: '5px',
    color: '#999999',
  },
  floatingLabel: {
    color: '#999999',
  },
  icon: {
    fill: '#4877f9',
  },
  fieldName: {
    flex: '0.6',
    fontSize: '14px',
  },
  fieldDate: {
    flex: '0.3',
    fontSize: '14px',
    marginLeft: '20px',
  },
  fieldCard: {
    flex: '0.45',
    fontSize: '14px',
  },
  fieldCvv: {
    flex: '0.2',
    fontSize: '14px',
    marginLeft: '20px',
  },
  fieldPass: {
    flex: '0.3',
    fontSize: '14px',
  },
  fieldDuration: {
    flex: '0.3',
    marginLeft: '15px',
    fontSize: '13px',
  },
  fieldPrice: {
    flex: '0.3',
    marginLeft: '15px',
    fontSize: '13px',
  },
  fieldUse: {
    marginTop: '20px',
    fontSize: '13px',
  },
  optionName: {
    color: '#999999',
    marginBottom: '15px',
  },
  optionValue: {
    color: '#666666',
  },
  checkbox: {
    marginTop: '15px',
    fontSize: '14px',
    fontWeight: '300',
    color: '#999999',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '10px',
  },
  partner: {
    marginBottom: '10px',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  partnerDescription: {
    color: '#666666',
  },
  gymInformation: {
    marginTop: '15px',
    fontSize: '13px',
  },
  gymInformationTitle: {
    color: '#999999',
    marginBottom: '15px',
  },
  gymTitle: {
    color: '#666666',
  },
  gymAddress: {
    marginBottom: '10px',
  },
  gymNumber: {
    marginBottom: '10px',
  },
  controls: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttonCancel: {
    fontSize: '15px',
  },
  buttonCheckout: {
    marginLeft: '20px',
  },
};

export const uiMobileMyPassActive = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: `url(${uiMobileMyPassAtiveBg})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    fontFamily: 'Ubuntu',
    paddingBottom: '25px',
  },
  countDown: {
    fontSize: '13px',
    color: '#cccccc',
    margin: '0 auto',
    maxWidth: '350px',
    textAlign: 'center',
    padding: '0 30px',
  },
  countDownDescription: {
    marginBottom: '15px',
  },
  countDownTimer: {
    fontSize: '18px',
  },
  countDownTitle: {
    marginBottom: '10px',
    fontWeight: '500',
    color: 'white',
  },
  countDownValue: {
    fontWeight: '600',
    fontSize: '24px',
    color: 'white',
  },
  countDownTimeHint: {
    marginRight: '7px',
    fontSize: '24px',
  },
};
export const uiMobileMyPassExpired = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: `url(${uiMobileMyPassExpiredBg})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    fontFamily: 'Ubuntu',
    paddingBottom: '25px',
  },
  statusWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 5px',
    fontSize: '13px',
    color: '#cccccc',
  },
  buttonBox: {
    width: '60%',
    margin: '0 auto 20px',
  },
  statusTitle: {
    padding: '0 20px 15px',
    borderBottom: '1px solid #9a918a',
  },
  passSelect: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px',
    borderBottom: '1px solid #9a918a',
  },
  passSelectTitle: {
    margin: 'auto 0',
    color: 'white',
  },
  passSelectCost: {
    margin: 'auto 10px auto 2px',
    color: 'white',
  },
  passSelectButton: {
    margin: 'auto 0',
  },
};
export const uiMobileMyPassGymPass = {
  appBar: {
    background: 'none',
  },
  wrapper: {
    padding: '0 25px',
    fontFamily: 'Ubuntu',
  },
  gym: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  imageBox: {
    flex: '0.33',
  },
  image: {
    width: '100%',
  },
  gymInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: '0.6',
  },
  gymTitle: {
    marginBottom: '3%',
    color: 'white',
    fontWeight: '500',
    fontSize: '17px',
  },
  partner: {
    fontSize: '13px',
    marginBottom: '2%',
    display: 'flex',
    color: '#cccccc',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  extraInfo: {
    color: 'white',
    fontSize: '13px',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '25px',
  },
  option: {
    marginRight: '30px',
    marginBottom: '20px',
    flex: 'none',
    '@media (max-width: 340px)': {
      flex: '0.5',
    },
  },
  optionName: {
    color: '#cccccc',
    marginBottom: '10px',
  },
  instruction: {
    margin:'5px 0 25px',
  },
  instructionTitle: {
    color: '#cccccc',
    marginBottom: '10px',
  },
};
export const uiMobileMyPassReady = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: `url(${uiMobileMyPassReadyBg})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    fontFamily: 'Ubuntu',
    paddingBottom: '25px',
  },
  statusWrapper: {
    padding: '0 30px',
    textAlign: 'center',
  },
  description: {
    fontSize: '13px',
    color: '#cccccc',
    marginBottom: '15px',
  },
  buttonBox: {
    width: '100%',
    margin: '0 auto',
    '@media (min-width: 480px)': {
      width: '65%',
    },
  }
};

export const uiMobileGym = {
  gym: {
    fontFamily: 'Ubuntu',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  imageBox: {
    flex: '0.25',
  },
  image: {
    width: '100%',
  },
  infoBox: {
    display: 'flex',
    flex: '0.715',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  boxRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    color: '#999999',
  },
  boxColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: '6px',
    color: '#4d4d4d',
    fontWeight: '500',
    fontSize: '17px',
  },
  partner: {
    display: 'flex',
    fontSize: '13px',
    marginBottom: '4px',
    color: '#666666',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  location: {
    display: 'flex',
    fontSize: '13px',
    color: '#999999',
    marginBottom: '4px',
  },
  locationIcon: {
    fill: '#4877f9',
    width: '17px',
    height: '17px',
    margin: 'auto 1% auto -1.2px',
  },
  locationDecription: {
    margin: 'auto 0',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '@media (max-width: 370px)': {
      width: '180px',
    }
  },
  date: {
    color: '#4d4d4d',
    fontWeight: '500',
  },
};

export const uiGym = {
  gym: {
    fontFamily: 'Ubuntu',
    width: '100%',
    '@media (min-width: 770px)': {
      background: 'white',
      marginBottom: '10px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      display: 'flex',
      height: '125px',
    }
  },
  gymExpired: {
    opacity: '0.6',
  },
  gymImageBox: {
    '@media (min-width: 770px)': {
      width:'181px',
    }
  },
  gymImage: {
    width: '100%',
    '@media (min-width: 770px)': {
      height:'125px',
    }
  },
  gymInfoBox: {
    display: 'flex',
    flex: '1',
    padding: '1.5% 2%',
    '@media (min-width: 770px)': {
      padding: '10px 15px',
    }
  },
  gymInfoMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1',
  },
  gymInfoExtra: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'right',
    color: '#666666',

    '@media (max-width: 770px)':{
      justifyContent: 'flex-end',
    },
  },
  gymTitle: {
    marginBottom: '4px',
    color: '#031021',
    fontWeight: '500',
    fontSize: '17px',
  },
  partner: {
    fontSize: '13px',
    marginBottom: '8px',
    display: 'flex',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  partnerDescription: {
    color: '#666666',
  },
  position: {
    fontSize: '13px',
    color: '#666666',
    fontWeight: '300',
  },
  positionText: {
    marginRight: '10px',
    '@media (max-width: 1024px)':{
      marginRight: '5px',
    },
  },
  costDescription: {
    fontSize: '13px',
    fontWeight: '300',

    '@media (min-width: 770px)': {
      display: 'inline-block',
      marginRight: '5px',
    }
  },
  costAmount: {
    color: 'black',
    fontSize: '24px',
    fontWeight: '500',

    '@media (min-width: 770px)': {
      display: 'inline-block',
    },
  },
  feedback: {
    fontSize: '13px',
    '@media (max-width: 970px)': {
      display: 'none',
    },
  },
  feedbackNumber: {
    marginBottom: '6px',
  },
  contentPasses: {
    '@media (min-width: 770px)': {
      flex: '0.83',
    }
  },
  expiresDescription: {
    color: '#666666',
    fontSize: '13px',
    '@media (min-width: 770px)': {
      display: 'inline-block',
      marginRight: '5px',
    }
  },
  expiresAmount: {
    color: 'black',
    fontWeight: '500',
    fontSize: '17px',
    '@media (min-width: 770px)': {
      display: 'inline-block',
    }
  },
  useDescription: {
    color: '#666666',
    fontSize: '13px',
    '@media (min-width: 770px)': {
      display: 'inline-block',
      marginRight: '5px',
    }
  },
  useAmount: {
    fontSize: '13px',
    color: '#999999',
    '@media (min-width: 770px)': {
      display: 'inline-block',
    }
  },
  expiredDescription:{
    color: '#666666',
    fontSize: '13px',
    '@media (min-width: 770px)': {
      display: 'inline-block',
      marginRight: '5px',
    }
  },
  expiredValue: {
    fontSize: '13px',
    color: '#999999',
    '@media (min-width: 770px)': {
      display: 'inline-block',
    }
  },
  dayPass: {
    fontSize: '13px',
    color: '#666666',
  },
};
export const uiTab = {
  styles: {
    tab: {
      display: 'inline-block',
      height: '100%',
      width: '50%',
      borderBottom: '1px solid #8a9099',
      cursor: 'pointer',
      paddingBottom: '5px',
      ':hover': {
        color: 'white',
      },
    },
    tabActive: {
      color: 'white',
      borderBottom: '5px solid #4877f9',
      fontWeight: '500',
    },
  },
  stylesDesktop: {
    width: 'auto',
    padding: '15px 45px 18px',
    cursor: 'pointer',
    borderBottom: 'none',
  },
};
export const uiTabs = {
  styles:{
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    color: '#dce1e7',
    width: '100%',
  },
  stylesDesktop: {
    width: 'auto',
  },
};

export const gymDetail = {
  main: {
    '@media (min-width: 770px)': {
      maxWidth: '750px',
      margin: '0 auto',
    },
    '@media (min-width: 960px)': {
      maxWidth: '920px',
      margin: '0 auto',
    },
    '@media (min-width: 1366px)': {
      maxWidth: '1040px',
      margin: '0 auto',
    },
    '@media (min-width: 1440px)': {
      maxWidth: '1124px',
      margin: '0 auto',
    },
    '@media (min-width: 1600px)': {
      maxWidth: '1400px',
      margin: '0 auto',
    },
  },
  wrapper: {
    background: '#f2f2f2',
    fontFamily: 'Ubuntu',
    fontSize: '15px',
    color: '#666666',
    '@media (max-width: 770px)': {
      background: '#162233',
      color: 'rgb(204, 204, 204)',
    }
  },
  noBorder: {
    border: 'none',
  },
  onlyMobile: {
    '@media (min-width: 770px)': {
      display: 'none',
    }
  },
  onlyDesktop: {
    '@media (max-width: 770px)': {
      display: 'none',
    }
  },
  headerMobile: {
    '@media (min-width: 770px)': {
      display: 'none',
    }
  },
  appBar: {
    backgroundColor: '#162233',
  },
  content: {
    '@media (min-width: 770px)': {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '40px',
    },
  },
  mainInfoWrapper: {
    '@media (min-width: 770px)': {
      flex: '0.63',
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      alignSelf: 'baseline',
    },
  },
  mainInfo: {
    '@media (min-width: 770px)': {
      padding: '10px 20px',
    },
  },
  gymImage: {
    width: '100%',
  },
  gymInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 770px)': {
      flexDirection: 'column',
      padding: '10px 12px',
    }
  },
  gymName: {
    fontSize: '17px',
    color: 'black',
    '@media (max-width: 770px)': {
      color: 'white',
    }
  },
  partner: {
    fontSize: '13px',
    margin: '6px 0 10px',
    display: 'flex',
    '@media (min-width: 770px)': {
      color: '#666666',
      margin: '6px 0 0',
    },
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  gymInfoExtra: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    '@media (min-width: 770px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }
  },
  gymInfoExtraDistance: {
    marginRight: '15px',
  },
  gymInfoExtraLink: {
    '@media (min-width: 770px)': {
      marginTop: '10px',
      textAlign: 'right',
    }
  },
  mapBox: {
    margin: '30px 0 15px',
    '@media (max-width: 770px)': {
      margin: '0 0 10px',
    },
  },
  map: {
    width: '100%',
    height: '240px',
    '@media (min-width: 770px)': {
      height: '320px',
      marginBottom: '10px',
    },
  },
  detailBox: {
    '@media (min-width: 770px)': {
      marginBottom: '20px',
    },
    '@media (max-width: 770px)': {
      padding: '0 1.75% 20px 2.5%'
    },
  },
  boxTitle: {
    fontSize: '17px',
    fontWeight: '500',
    borderBottom: '2px solid #4877f9',
    paddingBottom: '5px',
    color: 'black',
    '@media (max-width: 770px)': {
      color: 'white',
      borderBottom: '2px solid #727983',
    }
  },
  passSelect: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 5px',
    borderBottom: '1px solid #323c4b',
    color: 'white',
  },
  passSelectTitle: {
    margin: 'auto 0',
  },
  passSelectOption: {
    display: 'flex',
  },
  passSelectCost: {
    margin: 'auto 10px auto 0',
    fontSize: '16px',
  },
  passSelectButton: {
    margin: 'auto 0',
  },
  schedule: {
    marginTop: '10px',
    fontSize: '13px',
  },
  scheduleItem: {
    marginBottom: '10px',
  },
  scheduleDay: {
    marginRight: '14px',
    color: '#999999',
    '@media (max-width: 770px)': {
      color: 'white',
    }
  },
  about: {
    marginTop: '10px',
    fontSize: '13px',
  },
  boxOption: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  boxOptionDescription: {
    fontSize: '13px',
    margin: 'auto 0',
  },
  boxOptionButton: {
    margin: 'auto 0',
  },
  purchase: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  purchaseMain: {
    flex: '0.35'
  },
  purchaseTitle: {
    fontSize: '17px',
    fontWeight: '500',
    color: 'black',
  },
  purchaseParam: {
    fontSize: '14px',
    color: '#999999',
  },
  purchaseParamValue: {
    marginTop: '8px',
    fontSize: '13.5px',
  },
  purchaseDescription: {
    marginTop: '8px',
    fontSize: '12.5px',
  },
  purchaseOption: {
    flex: '0.6',
    display: 'flex',
    justifyContent: 'space-between',
  },
  purchaseButtonLabel: {
    fontSize: '16px',
    fontWeight: '400',
    textTransform: 'none',
    padding: '10px 23px'
  },
  list: {
    marginTop: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
  },
  listBox: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0.32',
    padding: '0 4px',
  },
  listItem: {
    textTransform: 'capitalize',
    marginTop: '15px',
  },
  slider: {
    display: 'block',
    overflow: 'hidden',
    marginTop: '10px',
    whiteSpace: 'nowrap',
  },
  sliderItem: {
    display: 'inline-block',
    width: '20%',
    marginRight: '9px',
  },
  sliderImage: {
    width: '100%',
  },
  aside: {
    flex: '0.354',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    background: 'white',
    padding: '20px 10px',
    '@media (max-width: 770px)': {
      display: 'none',
    },
  },
};

export const home = {
  main: {
    '@media (min-width: 770px)': {
      maxWidth: '750px',
      margin: '0 auto',
    },
    '@media (min-width: 960px)': {
      maxWidth: '920px',
      margin: '0 auto',
    },
    '@media (min-width: 1366px)': {
      maxWidth: '1040px',
      margin: '0 auto',
    },
    '@media (min-width: 1440px)': {
      maxWidth: '1124px',
      margin: '0 auto',
    },
    '@media (min-width: 1600px)': {
      maxWidth: '1400px',
      margin: '0 auto',
    },
  },
  home: {
    background: '#f2f2f2',
    '@media (min-width: 770px)': {
      paddingBottom: '40px',
    },
    '@media (max-width: 770px)': {
      background: 'white',
    },
  },
  headerMobile: {
    '@media (min-width: 770px)': {
      display: 'none'
    }
  },
  appBar: {
    backgroundColor: '#162233',
  },
  appBarRightBox: {
    display: 'flex',
    width: '70px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarSearch: {
    position: 'relative',
    backgroundColor: '#fafafa',
  },
  appBarSearchClose: {
    position: 'absolute',
    top: '20px',
    right: '24px',
  },
  appBarSearchInput: {
    position: 'absolute',
    left: '72px',
    width: '45%',
    fontWeight: '500',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  contentFilter: {
    '@media (max-width: 770px)': {
      display: 'none',
    },
    flex: '0.16',
    alignSelf: 'baseline',
    background: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    padding: '16px 24px 0',
  },
  contentFilterBox: {
    marginBottom: '30px',
  },
  filterFirstTitle: {
    fontFamily: 'Ubuntu',
    fontSize: '17px',
    fontWeight: '500',
    color: '#4d4d4d',
    margin: '0 0 16px 4px',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: '17px',
    fontWeight: '500',
    color: '#4d4d4d',
    marginBottom: '25px',
  },
  radioButton: {
    marginBottom: '13px',
    fontSize: '13px',
    fontWeight: '300',
    color: '#666666',
  },
  radioIcon: {
    fill: '#4877f9',
    marginRight: '10px',
  },
  checkbox: {
    marginBottom: '13px',
    fontSize: '13px',
    fontWeight: '300',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '10px',
  },
  filterField: {
    width: '151px',
    fontSize: '13px',
    fontWeight: '500',
  },
  fieldLabel: {
    fontSize: '16px',
    color: 'rgba(153, 153, 153, 1)',
    top: '28px',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  selectFieldIcon: {
    fill: '#4877f9',
  },
  contentPasses: {
    '@media (min-width: 770px)': {
      flex: '0.83',
    }
  },
  inputHintStyle: {
    fontWeight: '400',
  },
  listLink: {
    textDecoration: 'none',
  },
  listMainInfo: {
    fontWeight: '500',
  },
  map: {
    width: '100%',
    height: '240px',
    '@media (min-width: 770px)': {
      height: '320px',
      marginBottom: '10px',
    },
  },
};

export const homeFilter = {
  appBar: {
    backgroundColor: '#162233',
  },
  appBarButton: {
    color: '#4877f9',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: '17px',
    fontWeight: '500',
    color: '#4d4d4d',
    marginBottom: '3.5%',
  },
  filter: {
    display: 'flex',
    flexDirection: 'column',
    padding: '6% 10px 0',
  },
  filterMain: {
    flex: '1',
  },
  filterExtra: {
    flex: '1',
  },
  radioButtons: {
    display:'block',
    marginBottom: '6%',
  },
  radioButton: {
    display: 'inline-block',
    margin: '0 2% 2.25% 0',
    minWidth: '160px',
    width: 'auto',
    fontWeight: '300',
    color: '#666666',
    fontSize: '13px',
  },
  radioIcon: {
    fill: '#4877f9',
    marginRight: '2%',
  },
  areaTitle: {
    fontFamily: 'Ubuntu',
    fontSize: '17px',
    fontWeight: '500',
    color: '#4d4d4d',
  },
  area: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 3%',
    marginBottom: '3%',
  },
  areaRadius: {
    width: '45%',
    fontSize: '13px',
    fontWeight: '500',
  },
  address: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  areaZipcode: {
    flex: '0.45',
    fontSize: '13px',
    fontWeight: '500',
  },
  areaState: {
    flex: '0.45',
    fontSize: '13px',
    fontWeight: '500',
  },
  fieldLabel: {
    fontSize: '16px',
    color: 'rgba(153, 153, 153, 1)',
    top: '28px',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  selectFieldIcon: {
    fill: '#4877f9',
  },
  tabTitle: {
    fontSize: '17px',
    fontWeight: '500',
    color: '#4d4d4d',
    textTransform: 'capitalize',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  },
  checkboxGroup: {
    marginTop: '3%',
  },
  checkbox: {
    display: 'inline-block',
    marginBottom: '2%',
    width: 'auto',
    minWidth: '186px',
    fontWeight: '300',
    fontSize: '13px',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '2.5%',
  },
  button: {
    display: 'flex',
    margin: '6% auto',
  },
};

export const login = {
  login: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'flex',
    backgroundImage: `url(${loginBgMobile})`,
    backgroundSize: 'cover',
    '@media (min-width: 601px)': {
      backgroundImage: `url(${loginBgDesktop})`,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 'auto',
    height: '100%',
    '@media (min-width: 601px)': {
      width: '400px',
    },
  },
  logoBox: {
    display: 'flex',
    width: '230px',
    margin: 'auto',
    flex: '0.28',
  },
  logo: {
    width: '100%',
  },
  tabs: {
    display: 'flex',
    flex: '0.65',
    flexDirection: 'column',
  },
  signInButtons: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    justifyContent: 'space-between',
  },
  signInButton: {
    width: '75%',
    margin: '0 auto 3%',
  },
  firstButton: {
    width: '75%',
    margin: '0 auto 5%',
  },
  field: {
    display: 'flex',
    marginTop: '7%',
  },
  fieldIcon: {
    color: '#4877f9',
    margin: 'auto 9% auto 0',
  },
  fieldInput: {
    color: 'white',
  },
  fieldHint: {
    color: '#c2c3c3',
  },
};

export const myPasses = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 770px)': {
      maxWidth: '700px',
      margin: '0 auto',
    },
    '@media (min-width: 960px)': {
      maxWidth: '820px',
      margin: '0 auto',
    },
    '@media (min-width: 1440px)': {
      maxWidth: '1040px',
      margin: '0 auto',
    },
  },
  wrapperDesktop: {
    background: '#f2f2f2',
    '@media (min-width: 770px)': {
      minHeight: '100vh',
      paddingBottom: '40px',
    },
    '@media (max-width: 770px)': {
      display: 'none',
    },
  },
  changer: {
    alignSelf: 'flex-end',
    marginBottom: '10px',
    minWidth: '120px',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  icon: {
    fill: '#4877f9',
  },
  wrapperMobile: {
    '@media (min-width: 770px)': {
      display: 'none',
    },
  },
  appBar: {
    backgroundColor: '#162233',
  },
  tabs: {
    backgroundColor: '#162233',
    borderWidth: '4px',
  },
  tabWrapper: {
    background: 'white',
    padding: '0 2%',
  },
  gymBox: {
    padding: '15px 1%',
    borderBottom: '1px solid #d9d9d9',
  },
};

export const searchResult = {
  appBar: {
    backgroundColor: '#162233',
  },
  appBarRightBox: {
    display: 'flex',
    width: '70px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarSearch: {
    position: 'relative',
    backgroundColor: '#fafafa',
  },
  appBarSearchClose: {
    position: 'absolute',
    top: '20px',
    right: '24px',
  },
  appBarSearchInput: {
    position: 'absolute',
    left: '72px',
    fontWeight: '500',
  },
  inputHintStyle: {
    fontWeight: '400',
  },
  listLink: {
    textDecoration: 'none',
  },
  listMainInfo: {
    fontWeight: '500',
  },
  map: {
    width: '100%',
    height: '400px',
  },
  gym: {
    fontFamily: 'Ubuntu',
    width: '100%',
  },
  gymImage: {
    width: '100%',
  },
  gymInfoBox: {
    padding: '2.5% 3% 1.5%',
  },
  gymTitle: {
    marginBottom: '2%',
    color: '#031021',
    fontWeight: '500',
    fontSize: '20px',
  },
  gymDescription: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  gymInfo: {
    flex: '1',
  },
  partner: {
    marginBottom: '2%',
    display: 'flex',
  },
  logo: {
    width: '16px',
    height: '16px',
    margin: 'auto 1.5% auto 0',
    color: '#4877f9',
  },
  partnerDescription: {
    color: '#666666',
  },
  position: {
    color: '#666666',
    fontWeight: '300',
  },
  positionDistance: {
    marginRight: '3.5%',
  },
  cost: {
    color: '#666666',
  },
  costDescription: {
    fontWeight: '300',
    marginBottom: '1.5%',
  },
  costAmount: {
    fontWeight: '500',
    fontSize: '28px',
    color: 'black',
  }
}