import React from "react";
import CardList from "../cardList/cardList";

// 🧠 Restructured data: each column has a title and an array of cards
const data = [
  {
    title: "Design",
    cards: [
      {
        image: null,
        title: "Home business advertising ideas",
        description: "Successful businesses know the importance of building and maintaining…",
        avatars: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
        stats: { comments: 76, hearts: 32, likes: 66 },
        color :["blue","red","green","pink"]
      },
      {
        image: "https://s3-alpha-sig.figma.com/img/fd65/9bd7/8f490313a71e34da148bea8e49e4a006?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WUatuz4fcnqzhGuBgaZDP-AqG15Hef2jHpkZcT31BhSSFNHJo8G5QnPqdBzS3zBYpjd7y0jnacJQh-hJAZArjS3JyvLVL8MNj9Fb2MrW7NAgdPcVTWPjAHj3V8O6STaeQSrajSrijpJbuyghnxqrompmUqQWTIyN7mGzxFjFtO45ui6DOzw3AlnqUn~l4MI~v3RfAhPK5qTWmZWA2AgQHxOqW6F7PfCOwEhhYWTrkHf4cW0z0276B6Qelgoq~YOd~WWvK-ub8XX8LA42D~8ppnFHvvtmYKNSRedxsauCbvn5AuyufEUFAtOQnfLm9ZUFaz-u5M~MljjH7ikGMQkWiA__",
        title: "Unmatched toner cartridge quality 20 less than oem price",
        description: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
        avatars: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
        stats: { comments: 76, hearts: 32, likes: 66 },
        color :["blue","green",]
      },
    ],
  },
  {
    title: "Development",
    cards: [
      {
        image: "https://s3-alpha-sig.figma.com/img/9c3f/b220/c71279872db430b658d12442ce8627eb?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QH0MvrODWoCX9Ughyf-D8dkTRWGT9owhYivp6EU6raUcRfM~7Awf92-CNe1nuWqS2v6wmgz2d6A1Nieb4BgFA~aYqsVn~0YXyDKSwxnK~HiwQhdbd7Zpy-1AI6ja60c6OFTDoohaj6VmhoeD5sv7j0uX~7Kslqu2YhVqQTyVBNTkUYs4UtJ0nn3f40TswrXmqJ8CKrMGUzbTlycl2ZSHAPTcIZAg1kpLKEfkN3fvrF-SRakE8o4nX0Yq6iCE0YMPoU4yQ3ygeDg7vmHHYQTIiCYnwM4PqXKWjGXkFi~b3-pbHeaL~ZrVeLcH4~Ez510Mkpfj3hlWkUvHjsy2Xc6eDA__",
        title: "Unmatched toner cartridge quality 20 less than oem price",
        description: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
        avatars: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
        stats: { comments: 76, hearts: 32, likes: 66 },
        color :["red","green","pink"]
      },
      {
        image: "https://s3-alpha-sig.figma.com/img/1632/9421/33482a630bc071f8dea5050eae7295ce?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NYSmfGOIamBBWTnkIsC4bxAq6UI8ixk-Gv1KY-DsKaFj5RAo9vTwVCEFmP52hlhIAssfV-PcWRYirig9E~ca7dwIOimQ0YhJFM-RiYbCeidEcJAul300qR5ryo8XdBePFfrL-UI3gmLy8HAn5Ts8I1M~Ewti0V2Dy7eyAfpVR6MKjRSpoVHQ6ONHVxzhXdZRzOYOQ6Cnyfa08iF1MOKfHocMkhidUdjfAxbuE1vCICTD0lImHJHnVoI-LyVJm8m9NvkIqNHQ3cdrli4j4FoEUxZvtu2tx2ymGbaW8LG11mZax3IVuAHmsLs9oTN0Q2Z5O-76DlR~TpOAFVfDmbg~Yg__",
        title: "Unmatched toner cartridge quality 20 less than oem price",
        description: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
        avatars: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
        stats: { comments: 76, hearts: 32, likes: 66 },
        color :["blue","red","green","pink"]
      },
    ],
  },
  {
    title: "Prototip",
    cards: [
      {
        image: "https://s3-alpha-sig.figma.com/img/ae29/6eda/f45273fab67cc6d539ad0e4a9d2ec61c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s1WUhRPko3JeRisAQd8bkmYdlqOLSaH1czl5W7dp4iX9Qp61rAqTirg6M571rgwo1LFpvsU4NRhOyj0zJA2ddeHh6ld313CYIYaTQDPoIe6s8pd9uE38shfc6CmSNrbJNaedy0GU8XRweZRPi39KWthao3QjOKXDT2L34DJQxKL8Q7eN~d7x17Vo42vIsKyM6r9lctB0ADwMIDiaDPJrryrcxQLZi7T30o3p64smPTOTTarSAiZRMSYOL~7D6oegfrraVkeDf2c2-4V-3pQjVtzDbNU4PyTwDjoscv3bUjKUvPVRcq7eIKw0Nb3AHc-xBy6ON5SPbin7zrwDJc5I5Q__",
        title: "Home business advertising ideas",
        description: "Successful businesses know the importance of building and maintaining…",
        avatars: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
        stats: { comments: 76, hearts: 32, likes: 66 },
        color :["blue","pink"]
      },
      {
        image: null,
        title: "Unmatched toner cartridge quality 20 less than oem price",
        description: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
        avatars: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
        stats: { comments: 76, hearts: 32, likes: 66 },
        color :["blue","red","green"]
      },
    ],
  },
  {
    title: "Test",
    cards: [
      {
        image: "https://s3-alpha-sig.figma.com/img/d298/ce40/724dbd1232b1be78715bcb791856955c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I419AQXWoko9lp1F9VCNKyuW~MW~tniiHXdor4g6bfmMoFG17TRlJrfVGlqTUsWPNnR30vX4nwpQ5Yeu-BxS8ul7Q66JEn90O4e6IkcKU28-nCr1CiMG3YKMUVnJyyzGJAjwaPxJ7Y1P-V6CrZQzEeejO1a~p2Lz-2GfzAF1lzWjP2nl1m1SqFfPocs-JbyZxM8IOd~AJz4YOG4DQzws6kLwNHOfR7Vt5Cydo06tPUIdvaWty4cNugnErZ-2BEQuGXO3ZJ30eAo1uiUhiCXWb3iH76fVK-rmwVfmGtYDc2zB1SPpDg9mzpV~om6HeNuk32tRwjZOgeHY3vVGj~yvsQ__",
        title: "Home business advertising ideas",
        description: "Successful businesses know the importance of building and maintaining…",
        avatars: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
        stats: { comments: 76, hearts: 32, likes: 66 },
        color :["blue","red","green","pink"]
      },
      {
        image: null,
        title: "Unmatched toner cartridge quality 20 less than oem price",
        description: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
        avatars: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
        stats: { comments: 76, hearts: 32, likes: 66 },
        color :["blue","red","green","pink"]
      },
      {
        image: null,
        title: "Unmatched toner cartridge quality 20 less than oem price",
        description: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
        avatars: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
        stats: { comments: 76, hearts: 32, likes: 66 },
        color :["blue","green","pink"]
      },
    ],
  }, {
    title: "Final",
    cards: [
      {
        image: null,
        title: "Home business advertising ideas",
        description: "Successful businesses know the importance of building and maintaining…",
        avatars: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
        stats: { comments: 76, hearts: 32, likes: 66 },
        color :["blue","red"]
      },
      {
        image: "https://s3-alpha-sig.figma.com/img/1333/a77d/38632041943edf9aa23f3e8bb11a3ecd?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WvmBaCpab0qWeIArft-2us48Z-ZqIhFD1f8LuH5T7AM0GX3YpFVSEu5nzv688AT1gz0QLMbj~TUtNHbBVDGrtMviezxtg6Kh7UFsvt4tqcMUAAeAvZdIODBwSSKwzqc7UKaRBCc3ZQP0ymzWXCH5~uEPj4AsWVTAUlDNbKTssvfzLvqQktRQn5h2kGHWrHYTZnCUZE73XwZNSkfvYNLy2~1V79RGrGiEjFTWk1MYuAYIgFp0zXsCxeyPN0x5g3WnqILG8navVUHN9e-QhUJ8Vhp~wAd4ekOM8UmIwF2wtyHChYjAMKadryROdty6zgFakcHUjuT1WdKoEOu-7Brdxg__",
        title: "Unmatched toner cartridge quality 20 less than oem price",
        description: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
        avatars: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/45.jpg",
          "https://randomuser.me/api/portraits/women/46.jpg",
        ],
        stats: { comments: 76, hearts: 32, likes: 66 },
        color :["green","pink"]
      },
    ],
  },
];

const CardSection = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      {data.map((column, idx) => (
        <CardList key={idx} title={column.title} cardata={column.cards} />
      ))}
    </div>
  );
};

export default CardSection;
