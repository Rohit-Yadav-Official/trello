import React, { useEffect, useState } from "react";

import CardList from "../cardList/cardList";


const data={
  "board": {
    "id": "brackets-board",
    "title": "Brackets",
    "isPublic": true,
    "lists": [
      {
        "id": "list-1",
        "title": "Design",
        "cards": [
          {
            "id": "card-1",
            "title": "Old fashioned recipe for preventing allergies and chemical sensitivities",
            "labels": [{ "color": "yellow", "id": "label-1" }],
            "comments": 34,
            "votes": 19,
            "attachments": 34,
            "members": [{ "id": "user-1", "avatar": "https://i.pravatar.cc/30?img=1" }]
          },
          {
            "id": "card-2",
            "title": "Home business advertising ideas",
            "description": "Successful businesses know the importance of building and maintaining good working",
            "labels": [
              { "color": "blue", "id": "label-2" }, 
              { "color": "red", "id": "label-3" }, 
              { "color": "purple", "id": "label-4" }
            ],
            "comments": 25,
            "votes": 6,
            "attachments": 43,
            "members": [
              { "id": "user-2", "avatar": "https://i.pravatar.cc/30?img=2" },
              { "id": "user-3", "avatar": "https://i.pravatar.cc/30?img=3" }
            ]
          },
          {
            "id": "card-3",
            "title": "Cosmetic surgery abroad making the right choice",
            "labels": [{ "color": "blue", "id": "label-2" }],
            "comments": 14,
            "votes": 16,
            "attachments": 23,
            "members": [
              { "id": "user-1", "avatar": "https://i.pravatar.cc/30?img=1" },
              { "id": "user-2", "avatar": "https://i.pravatar.cc/30?img=2" },
              { "id": "user-3", "avatar": "https://i.pravatar.cc/30?img=3" }
            ],
            "coverImage": "https://picsum.photos/id/237/200/150"
          }
        ]
      },
      {
        "id": "list-2",
        "title": "Prototip",
        "cards": [
          {
            "id": "card-4",
            "title": "Home business advertising ideas",
            "description": "Successful businesses know the importance of building and maintaining good working",
            "labels": [
              { "color": "blue", "id": "label-2" }, 
              { "color": "red", "id": "label-3" }, 
              { "color": "purple", "id": "label-4" }
            ],
            "comments": 36,
            "votes": 45,
            "attachments": 2,
            "members": [{ "id": "user-4", "avatar": "https://i.pravatar.cc/30?img=4" }]
          },
          {
            "id": "card-5",
            "title": "Unmatched toner cartridge quality 20 less than oem price",
            "description": "Why read motivational sayings? For motivation! You might need a bit if you can use that warm list of goals this year because it's as good as new.",
            "labels": [
              { "color": "blue", "id": "label-2" }, 
              { "color": "orange", "id": "label-5" }
            ],
            "comments": 76,
            "votes": 32,
            "attachments": 66,
            "members": [
              { "id": "user-5", "avatar": "https://i.pravatar.cc/30?img=5" },
              { "id": "user-6", "avatar": "https://i.pravatar.cc/30?img=6" },
              { "id": "user-7", "avatar": "https://i.pravatar.cc/30?img=7" }
            ],
            "coverImage": "https://picsum.photos/id/3/200/150"
          },
          {
            "id": "card-6",
            "title": "How to look up",
            "description": "Are you considering buying a compatible inkjet cartridge for your printer?",
            "comments": 54,
            "votes": 16,
            "attachments": 6,
            "members": [
              { "id": "user-2", "avatar": "https://i.pravatar.cc/30?img=2" },
              { "id": "user-3", "avatar": "https://i.pravatar.cc/30?img=3" },
              { "id": "user-4", "avatar": "https://i.pravatar.cc/30?img=4" }
            ],
            "coverImage": "https://picsum.photos/id/20/200/150"
          }
        ]
      },
      {
        "id": "list-3",
        "title": "Trello",
        "cards": [
          {
            "id": "card-7",
            "coverImage": "https://picsum.photos/id/77/200/150",
            "title": "Types of paper in catalog printing",
            "description": "Branding is no longer simply about visual appeal (or the cherry in the apple pie, example, as given in my earlier article).",
            "labels": [{ "color": "purple", "id": "label-4" }],
            "comments": 34,
            "votes": 22,
            "attachments": 16,
            "members": [
              { "id": "user-1", "avatar": "https://i.pravatar.cc/30?img=1" },
              { "id": "user-2", "avatar": "https://i.pravatar.cc/30?img=2" }
            ]
          },
          {
            "id": "card-8",
            "title": "There is no competition",
            "description": "This article is loaded online with an aim to help you find the best dvd printing solution.",
            "labels": [
              { "color": "blue", "id": "label-2" }, 
              { "color": "green", "id": "label-6" }
            ],
            "comments": 23,
            "votes": 9,
            "attachments": 44,
            "members": [{ "id": "user-5", "avatar": "https://i.pravatar.cc/30?img=5" }]
          }
        ]
      },
      {
        "id": "list-4",
        "title": "Test",
        "cards": [
          {
            "id": "card-9",
            "title": "Linux or windows which is it",
            "description": "Saving money – is something we would all like.",
            "labels": [
              { "color": "blue", "id": "label-2" }, 
              { "color": "red", "id": "label-3" }
            ],
            "comments": 92,
            "votes": 6,
            "attachments": 3,
            "members": [
              { "id": "user-8", "avatar": "https://i.pravatar.cc/30?img=8" },
              { "id": "user-9", "avatar": "https://i.pravatar.cc/30?img=9" },
              { "id": "user-10", "avatar": "https://i.pravatar.cc/30?img=10" }
            ]
          },
          {
            "id": "card-10",
            "title": "Be single minded",
            "description": "Create a list with all possible keywords that fit to your product service or business field.",
            "labels": [{ "color": "yellow", "id": "label-1" }],
            "comments": 42,
            "votes": 34,
            "attachments": 7,
            "members": [
              { "id": "user-8", "avatar": "https://i.pravatar.cc/30?img=8" },
              { "id": "user-11", "avatar": "https://i.pravatar.cc/30?img=11" }
            ],
            "coverImage": "https://picsum.photos/id/27/200/150"
          },
          {
            "id": "card-11",
            "title": "Linux or windows which is it",
            "description": "Saving money – is something we would all like.",
            "labels": [
              { "color": "yellow", "id": "label-1" }, 
              { "color": "orange", "id": "label-5" }
            ],
            "comments": 95,
            "votes": 25,
            "attachments": 16,
            "members": [
              { "id": "user-8", "avatar": "https://i.pravatar.cc/30?img=8" },
              { "id": "user-9", "avatar": "https://i.pravatar.cc/30?img=9" },
              { "id": "user-10", "avatar": "https://i.pravatar.cc/30?img=10" },
              { "id": "user-11", "avatar": "https://i.pravatar.cc/30?img=11" }
            ]
          },
          {
            "id": "card-12",
            "title": "Dna the future of nutrition",
            "description": "\"Why does anyone want a vasectomy reversal?\" This is a question I hear any time I tell someone what I do for a living.",
            "labels": [
              { "color": "blue", "id": "label-2" }, 
              { "color": "green", "id": "label-6" }
            ],
            "comments": 19,
            "votes": 31,
            "attachments": 68,
            "members": [
              { "id": "user-12", "avatar": "https://i.pravatar.cc/30?img=12" },
              { "id": "user-13", "avatar": "https://i.pravatar.cc/30?img=13" }
            ]
          }
        ]
      },
      {
        "id": "list-5",
        "title": "Final",
        "cards": [
          {
            "id": "card-13",
            "title": "At home treatments for beauty on a budget",
            "description": "The holidays bring with them thoughts of carving and serving delicious turkey dinners to your family and friends. Tradition has its fans, but perhaps your idea is to try a twist to your turkey recipe.",
            "labels": [
              { "color": "yellow", "id": "label-1" }, 
              { "color": "red", "id": "label-3" }, 
              { "color": "purple", "id": "label-4" }
            ],
            "comments": 51,
            "votes": 64,
            "attachments": 3,
            "members": [{ "id": "user-14", "avatar": "https://i.pravatar.cc/30?img=14" }]
          },
          {
            "id": "card-14",
            "title": "Home business advertising ideas",
            "description": "Successful businesses know the importance of building and maintaining good working",
            "labels": [
              { "color": "yellow", "id": "label-1" }, 
              { "color": "red", "id": "label-3" }, 
              { "color": "purple", "id": "label-4" }
            ],
            "comments": 8,
            "votes": 1,
            "attachments": 4,
            "members": [
              { "id": "user-15", "avatar": "https://i.pravatar.cc/30?img=15" },
              { "id": "user-16", "avatar": "https://i.pravatar.cc/30?img=16" }
            ]
          },
          {
            "id": "card-15",
            "title": "Tips for choosing the perfect gloss for your lips",
            "description": "With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.",
            "labels": [
              { "color": "blue", "id": "label-2" }, 
              { "color": "orange", "id": "label-5" }
            ],
            "comments": 71,
            "votes": 23,
            "attachments": 3,
            "members": [
              { "id": "user-17", "avatar": "https://i.pravatar.cc/30?img=17" },
              { "id": "user-18", "avatar": "https://i.pravatar.cc/30?img=18" }
            ],
            "coverImage": "https://picsum.photos/id/64/200/150"
          }
        ]
      }
    ],
   
  }
}
const CardSection = () => {
//   const [columns, setColumns] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://rbtest.free.beeceptor.com/todo");
//         setColumns(response.data.board.lists); // Assuming the response is an array
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
     {data.board.lists.map((list) => (
        <CardList
          key={list.id}
          title={list.title}
          cardata={list.cards}
        />
      ))}
    </div>
  );

     };
export default CardSection;
