import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          TravelDetails: {
            p1: "We are getting married at the lovely Claudine restaurant in Dempsey.",
            p2: "Driving: Claudine, 39C Harding Road, Singapore, 249541 (ample parking)",
            p3: "MRT: Napier TE12 (15 minute walk)",
            p4: "Bus: Bef Tyersall Ave (5 minute walk)",
          },
          Menu: {
            Home: "Home",
            FAQs: "FAQs",
            MoreOfUs: "More of Us",
            Travel: "Travel",
            RSVP: "RSVP",
          },
          FAQ: {
            Title: "Wedding FAQs",
            ContactUs: `For any questions or
                  concerns, please feel free to contact us at
                  changwedsperkins@gmail.com!`,
            1: {
              q: "What date should I rsvp by?",
              a: "Please RSVP by June 30th Monday.",
            },
            2: {
              q: "Is there parking at the venue?",
              a: "There is free on-site parking at Claudine and in the surrounding vicinity.",
            },
            3: {
              q: "Is your wedding indoors or outdoors?",
              a: `Our reception and ceremony will be fully indoors and air-conditioned
                  but the outdoor garden terrace will be open for welcome refreshments
                  and light bites.`,
            },
            4: {
              q: "What is your dress-code?",
              a: `While there are no color restrictions (except white, of course!),
                  our dress-code is black tie optional. Please dress your best! While
                  tuxedos and gowns are encouraged, suits and midi- or knee-length
                  fancy cocktail dresses are also welcome.`,
            },
            5: {
              q: "What is the wedding day itinerary?",
              a: `Welcome canapés and bubbly at La Terrace will begin from 11 AM. We
                  will also have a video phone book at guest registration and we would
                  love for you to leave us a video message! Doors to the solemnisation
                  area will be open then for guests to find a seat. Seats are not
                  assigned for the ceremony aside from reserved seats for the bride
                  and groom's parents. There will be assigned seating and a seating
                  chart for the reception. Guests are requested to be seated by
                  11.45AM as the ceremony will begin at 12PM sharp. Following that,
                  guests will be ushered into the main dining hall at 1230PM for the
                  lunch reception which is slated to conclude by 3PM.`,
            },
            6: {
              q: "Can I take photos during the solemnization ceremony?",
              a: `We kindly ask for your cooperation to keep our ceremony “unplugged”
                  and refrain from using any mobile phones, cameras or recording
                  devices. Our spectacular photographers and videographers will
                  capture every moment and it is important they do not be obstructed
                  by screens or movements in the aisle. We’d love for our guests to be
                  fully present with us during these special moments. Guests are
                  welcome to photograph freely during the reception and at all other
                  points of the day!`,
            },
            7: {
              q: "Are plus-ones and children allowed?",
              a: `Please check the wedding invitation for the names of all invited
                  guests. As our wedding is an intimate and cozy event, we will not be
                  accommodating additional guests unless clearly stated on the invite!`,
            },
            8: {
              q: "Will you have a wedding gift registry?",
              a: `We will not have a traditional gift registry and your presence is
                  our greatest gift of all! In lieu of gifts, we will have a cash
                  registry box that will be available at the guest registration table
                  if you wish to bless us with a cash gift.`,
            },
          },
          RSVP: {
            Errors: {
              Name: "Name is required",
              Email: "Email is required",
              WhatsApp: "WhatsApp is required",
              ValidEmail: "Please enter a valid email address",
              PhoneNumber: "Please enter a valid phone number",
              Form: "Please check your form inputs and try again",
              Alert: "Something went wrong. Please try again later",
            },
            Fields: {
              Attending: "I will be attending",
              NotAttending: "I am unable to attend",
              Name: "Name",
              WhatsApp: "WhatsApp",
              Email: "Email",
              PreferredContactMethod: "Preferred Contact Method",
              RSVP: "RSVP",
              NumberOfGuests: "Number of Guests",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              10: "10",
              Guest: "Guest",
              DietaryRequirementsGuest: "Dietary Requirements Guest",
              ThankYou: {
                p1: "Thank you for taking the time to respond.",
                p2: "We cannot wait to see you on the big day!",
              },
            },
          },
          Heading: {
            Title: "Kaiqing & Ashley",
            p1: "2ND AUGUST 2025",
            p2: "CLAUDINE, SINGAPORE",
            p3: "NN DAYS TO GO!",
          },
          Mobile: {
            RSVP: "RSVP",
            Days: "Days",
            Hours: "Hours",
            Minutes: "Minutes",
          },
        },
      },
      zh: {
        translation: {
          TravelDetails: {
            p1: "我们将在Dempsey区域优美浪漫的法国餐厅 CLAUDINE RESTAURANT 举行我们的婚礼与午宴。 ",
            p2: "开车: Claudine, 39C Harding Road, Singapore, S249541 (免费停车）",
            p3: "地跌: Napier TE12 (步行 15 分钟)",
            p4: "巴士: Bef Tyersall Ave (步行 5 分钟)",
          },
          Menu: {
            Home: "主页",
            FAQs: "婚礼常见问题",
            MoreOfUs: "婚前摄影精选",
            Travel: "场地交通指南",
            RSVP: "RSVP 确认出席",
          },
          FAQ: {
            Title: "Wedding FAQs",
            ContactUs:
              "如有任何疑问，请随时通过 changwedsperkins@gmail.com 与我们联系！",
            1: {
              q: "确认出席 (RSVP) 的截止日期是几时？",
              a: "请于6月30日（星期一）前回复出席。",
            },
            2: {
              q: "场地有停车位吗？",
              a: "Claudine 餐厅及其周围Dempsey区域会有免费停车位。",
            },
            3: {
              q: "婚礼是在室内还是室外举行？",
              a: `我们全场婚礼证婚仪式和宴客将在含全空调室内举行。仪式前，宾客可在露天户外花园La Terrace享用香槟和小点心。`,
            },
            4: {
              q: "着装要求是什么？",
              a: `除了白色，我们没有颜色系列上的限制。着装要求为优雅但不需过于正式的 ‘black-tie optional’ 
                【选择式黑领带】— 正裝，礼服，鸡尾酒服都欢迎。`,
            },
            5: {
              q: "婚礼当天的流程是怎样？",
              a: `上午11:00 起，贵宾可以在La Terrace 露天户外花园享用精致的小餐点。宾客登记处将会有视频留言簿，
                欢迎大家为我们这对新人留下您们的祝福视频和语录！  除了为新人双方父母保留的前排座位以外，
                仪式座位区也将此时同时开放让宾客提前自由入座。请宾客于上午11:45前就座，仪式将于中午12点准时开始。
                随后，宾客将于12:30 PM左右进入主宴会厅就坐（宴客厅会有指定的座位图）享用午宴，预计下午3点结束。`,
            },
            6: {
              q: "证婚仪式过程可以拍照吗？",
              a: `我们诚挚地要求宾客协助我们达成【无屏幕】的证婚仪式，恳请各位嘉宾在证婚仪式期间避免用手机或相机拍摄。
                  我们优秀的专业摄影师和录影师团队将会捕捉每一刻珍贵的画面，并在迟些时候与大家分享。为了确保流程顺畅，
                  务必避免屏幕或走动干扰拍摄的过程，谢谢你们的谅解。我们希望各位前来祝福我们的宾客能与我们在当下一起见证这特别的时刻。
                  除了证婚仪式上无屏幕的要求，午宴和婚礼其余的部分宾客非常欢迎尽情自由拍照留念！`,
            },
            7: {
              q: "可以携带伴侣或孩子参加吗？",
              a: `由于我们婚礼的规模是一场温馨小巧和亲切温暖的聚会， 我们仅接待邀请函上明确列出的宾客。`,
            },
            8: {
              q: "有婚礼礼物/礼金登记吗？",
              a: `您的到来已是我们最珍贵的礼物！若您希望以礼金祝福我们和表达心意，宾客签到处将会设有贺礼礼金箱。非常感谢您对我们的爱戴和祝福！`,
            },
          },
          RSVP: {
            Errors: {
              Name: "必填写姓名",
              Email: "必填写电子邮件地址",
              WhatsApp: "必填写手机或Whatsapp号吗",
              ValidEmail: "请输入有效的电子邮件地址",
              PhoneNumber: "请输入有效的联络号吗",
              Form: "请检查您填写的表格内容，再次填写正确的资料",
              Alert: "系统出现问题，请稍后再试",
            },
            Fields: {
              Attending: "我可以出席",
              NotAttending: "我不能出席",
              Name: "Name",
              WhatsApp: "WhatsApp",
              Email: "电子邮件",
              PreferredContactMethod: "首选联络方式",
              RSVP: "RSVP 确认出席",
              NumberOfGuests: "出席人数",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              10: "10",
              Guest: "来宾",
              DietaryRequirementsGuest: "饮食需求",
              ThankYou: {
                p1: "感谢您拨冗回复出席",
                p2: "我们敬请期待在我们的大喜之日与您见面！",
              },
            },
          },
          Heading: {
            Title: "Kaiqing & Ashley",
            p1: "2025 年 8 月 2 日",
            p2: "CLAUDINE, 新加坡",
            p3: "倒数 NN 天",
          },
          Mobile: {
            RSVP: "确认出席",
            Days: "Days",
            Hours: "Hours",
            Minutes: "Minutes",
          },
        },
      },
    },
  });

export default i18n;
