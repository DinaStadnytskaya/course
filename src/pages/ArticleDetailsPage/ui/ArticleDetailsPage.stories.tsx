/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'page/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;
const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

const article: Article = {
    id: '1',
    title: 'How to Get/Detect Window Size(Height & Width) in React js',
    subtitle: 'In this Reactjs tutorial, we will learn about How to Get/Detect Window Size(Height & Width) in React js. React Js get window height& width on window resize; In this tutorial, you will learn how to detect the dynamic window width and height on window resize using react useState and useEffect hooks.',
    img: 'https://blog.logrocket.com/wp-content/uploads/2019/05/create-react-app-getting-started.png',
    views: 654,
    createdAt: '03.04.2023',
    user: {
        id: '1',
        username: 'Denah',
        avatar: '',
    },
    type: [ArticleType.NEWS],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'How to Get/Detect Window Size(Height & Width) in React Js',
            paragraphs: [
                'Here is steps to get or detect window size in react js app:',
                'Step 1 – Create React App',
                'Step 2 – Create Simple Component',
                'Step 3 – Add Component in App.js',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.TEXT,
            title: 'Step 1 – Create React App',
            paragraphs: [
                'In this step, open your terminal and execute the following command on your terminal to create a new react app:',
                'To run the React app, execute the following command on your terminal:',
                'Check out your React app on this URL: localhost: 3000',
            ],
        },
        {
            id: '3',
            type: ArticleBlockType.TEXT,
            title: 'Step 2 – Create Simple Component',
            paragraphs: [
                'Visit the src directory of your react js app and create get dynamic height and width component named',
                ' UserWindow.js. And add the following code into it:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: 'import React, { Component } from "react";\n\nclass UserWindow extends Component {\n\n    render() {\n\nreturn (\n\n<> </>\n\n);\n\n}\n\n}\n\nexport default UserWindow;\n\n',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            paragraphs: [
                'Then implement code to detect window height width on window resize; as shown below:',
                'This is a React component that renders a user window with the dynamic width and height of the browser window.',
            ],
        },
        {
            id: '6',
            type: ArticleBlockType.CODE,
            code: "import React, { useState, useEffect } from 'react';\n\nexport default function UserWindow() {\n\nconst [screenSize, getDimension] = useState({\n\ndynamicWidth: window.innerWidth,\n\ndynamicHeight: window.innerHeight\n\n});\n\nconst setDimension = () => {\n\ngetDimension({\n\ndynamicWidth: window.innerWidth,\n\ndynamicHeight: window.innerHeight\n\n})\n\n}\n\nuseEffect(() => {\n\nwindow.addEventListener('resize', setDimension);\n\nreturn(() => {\n\nwindow.removeEventListener('resize', setDimension);\n\n})\n\n},\n\n[screenSize])\n\nreturn (\n\n<div>\n\n<ul>\n\n<li>Width: <strong>{screenSize.adynamicWidth}</strong></li>\n\n<li>Height: <strong>{screenSize.dynamicHeight}</strong></li>\n\n</ul>\n\n</div>\n\n)\n\n}",
        },
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            paragraphs: [
                'So overall, this component sets up an event listener to track the changes in the size of the browser window and',
                'updates the state accordingly using the useState and useEffect hooks. The updated state is then displayed',
                'within the component.',
            ],
        },
        {
            id: '8',
            type: ArticleBlockType.TEXT,
            title: 'Step 3 – Add Component in App.js',
            paragraphs: [
                'In this step, you need to add  UserWindow.js file in src/App.js file:',
                'Conclusion',
                'React Get Window Height Width; In this tutorial, you have learned how detect or get dynamic window height and',
                'width in react js application.',
            ],
        },
        {
            id: '9',
            type: ArticleBlockType.CODE,
            code: "import React from 'react';\n\nimport './App.css';\n\nimport UrlComponent from './components/UrlComponent';\n\nfunction App() {\n\nreturn (\n\n<div className=\"App\">\n\n<UrlComponent />\n\n</div>\n\n);}\n\nexport default App;",
        },
        {
            id: '10',
            type: ArticleBlockType.IMAGE,
            src: 'https://cbsedu.blob.core.windows.net/course-video-covers/course-video-covers-9e140169-c4e7-414d-ae41-a855a5ad48f8.jpg',
            title: 'Рисунок 1 - скриншот сайта',
        },
    ],

};
export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];
