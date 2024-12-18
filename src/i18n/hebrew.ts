import { ResultsTypes } from '../lib/enums';

export const hebrew = {
  disabled: 'מוסתר',
  systemName: 'Call-Aman',
  yes: 'כן',
  no: 'לא',
  hello: 'שלום',
  unknown: 'לא ידוע',
  search: 'חיפוש',
  save: 'שמירה',
  cancelChanges: 'ביטול שינויים',
  role: 'פרטי תפקיד',
  cancel: 'ביטול',
  userDetails: 'פרטי משתמש',
  extraContactDetails: 'דרכי התקשרות נוספים',
  field: {
    hierarchy: 'היררכיה',
    mail: 'מייל',
    mobilePhone: 'טלפון נייד',
    birthDate: 'תאריך לידה',
    personalNumber: 'מספר אישי',
    identityCard: 'תעודת זהות',
    employeeId: 'מספר עובד',
    rank: 'דרגה',
    redPhone: 'טלפון אדום',
    jabberPhone: "טלפון ג'אבר",
    otherPhone: 'טלפון אחר',
    serviceType: 'סוג שירות',
    dischargeDate: 'תאריך שחרור',
    jobTitle: 'תפקיד',
  },
  edit: 'עריכה',
  noData: 'אין מידע',
  saveChanges: 'שמירת שינויים',
  description: 'תיאור',
  hierarchy: 'היררכיה',
  contactDetails: 'פרטי יצירת קשר',
  fastShortcuts: 'קיצורים מהירים',
  redPhone: 'טלפון אדום',
  anotherPhone: 'טלפון נוסף',
  mail: 'מייל',
  people: 'אנשים',
  hierarchyCommander: 'מפקד היררכיה',
  resultsType: {
    [ResultsTypes.ENTITY]: 'אנשי קשר',
    [ResultsTypes.GROUP]: 'היררכיות',
    [ResultsTypes.GOAL_USER]: 'חמל"ים',
    [ResultsTypes.TAG]: 'תגיות',
  },
  historyHeader: 'חיפושים אחרונים',
  tagsExplain: 'ניתן להוסיף תגיות לכרטיסייה שיצרתם בהתאם לסוג הכרטיסיה, תחום מקצועי ומערכות קשורות.',
  tagsTitle: 'התגיות שלי',
  newTag: 'תגית חדשה',
  hiChat: 'Hi.Chat',
  outlook: 'מייל',
  jabber: 'Jabber',
  dialog: {
    savedChanges: 'האם לשמור את השינויים?',
    areYouSure: 'שמנו לב שביצעת שינויים.',
    afterSave: 'האם ברצונך לצאת ללא שמירה?',
  },
  validationError: {
    mobilePhone: 'טלפון נייד מכיל 10 ספרות.',
    redPhone: 'טלפון אדום מכיל 10 ספרות.',
    jabberPhone: "טלפון גא'בר מכיל עד 8 ספרות וכוכבית.",
    otherPhone: 'טלפון אחר מכיל 10 ספרות.',
    mail: 'נא להזין כתובת אימייל חוקית',
  },
  chatBotDialog: {
    wereHereToHelp: 'נתקלת בבעיה? אנחנו כאן לעזור!',
    haveAProblem: 'יש לך שאלה או בעיה טכנית בשימוש במערכת?',
    weWouldLikeToHelp: 'נשמח לסייע!',
    noThankYou: 'לא, תודה',
    openIssue: 'פתיחת תקלה',
  },
};
