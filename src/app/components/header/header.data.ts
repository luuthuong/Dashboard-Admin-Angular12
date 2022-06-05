const lstIcon = {
  bookmark: [
    {
      name: 'calendar_month',
      tooltip: 'Calendar'
    },
    {
      name: 'chat_bubble_outline',
      tooltip: 'Chat'
    },
    {
      name: 'mail_outline',
      tooltip: 'Mail'
    },
    {
      name: 'checklist_rtl',
      tooltip: 'Todo'
    },
    {
      name: 'star_outline',
      tooltip: 'Save'
    }
  ],
  notification:[
    {
      name:'dark_mode',
      tooltip:'Dark Mode'
    },
    {
      name:'light_mode',
      tooltip:'Light Mode'
    },
    {
      name:'search',
      tooltip:'Search'
    },
    {
      name:'local_grocery_store',
      tooltip:'Store'
    },
    {
      name:'notifications',
      tooltip:'Notification'
    }
  ]
}
const language=[
  {
    name:'English',
    image:'../../../assets/English.png'
  },
  {
    name:'Germany',
    image:'../../../assets/German.png'
  },
  {
    name:'Portuguese',
    image:'../../../assets/Portuguese.png'
  },
  {
    name:'French',
    image:'../../../assets/French.png'
  },
]
const menuAvatar={
  account:[
    {
      title:'Profile',
      icon:'person'
    },
    {
      title:'Inbox',
      icon:'mail_outline'
    },
    {
      title:'Task',
      icon:'task_alt'
    },
    {
      title:'Chat',
      icon:'chat_bubble_outline'
    }
  ],
  options:[
    {
      title:'Setting',
      icon:'settings'
    },
    {
      title:'Pricing',
      icon:'credit_card'
    },
    {
      title:'FAQ',
      icon:'help_outline'
    },
    {
      title:'Log Out',
      icon:'logout'
    },
  ]
}
const data={
  lstIcon,
  language,
  menuAvatar
}
export default data
