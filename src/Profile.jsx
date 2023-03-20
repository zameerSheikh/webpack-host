import React from "react";
import "./Profile.css";
import Employees from "./HelloVue";

const tweets = [
    {
        id: 3,
        name: 'Xin',
        handle: '@xeroxin',
        img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
        tweet: 'Beauty in the struggle, ugliness in the success.',
        likes: 18,
      },
      {
        id: 4,
        name: 'John',
        handle: '@johhn',
        img: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png',
        tweet: 'Hard work pays off',
        likes: 180,
      }
    ]

export default function Profile() {
    return (
        <div className="profile">
            <Employees />
        </div>
    )
}