import { ResultsTypes } from '../lib/enums';

export const hebrew = {
  systemName: 'Call-Aman',
  yes: 'כן',
  no: 'לא',
  hello: 'שלום',
  unknown: 'לא ידוע',
  search: 'חיפוש',
  save: 'שמירה',
  role: 'תפקיד',
  cancel: 'ביטול',
  militaryDetails: 'פרטים צבאיים',
  field: {
    hierarchy: 'היררכיה',
    uniqueId: 'מזהה',
    mail: 'מייל',
    mobilePhone: 'טלפון נייד',
    birthDate: 'תאריך לידה',
    personalNumber: 'מספר אישי',
    identityCard: 'תעודת זהות',
    rank: 'דרגה',
    redPhone: 'טלפון אדום',
    jabberPhone: "טלפון ג'אבר",
  },
  edit: 'עריכה',
  noData: 'אין מידע',
  saveChanges: 'שמירת שינויים',
  description: 'תיאור',
  hierarchy: 'היררכיה',
  contactDetails: 'פרטי יצירת קשר',
  redPhone: 'טלפון אדום',
  anotherPhone: 'טלפון נוסף',
  mail: 'דוא"ל',
  people: 'אנשים',
  hierarchyCommander: 'מפקד היררכיה',
  resultsType: {
    [ResultsTypes.ENTITY]: 'אנשי קשר',
    [ResultsTypes.GROUP]: 'היררכיות',
    [ResultsTypes.GOAL_USER]: 'חמל"ים',
  },
  historyHeader: 'חיפושים אחרונים',
  tagsExplain: 'ניתן להוסיף תגיות לכרטיסייה שיצרתם בהתאם לסוג הכרטיסיה, תחום מקצועי ומערכות קשורות.',
  tagsTitle: 'התגיות שלי',
};
