import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';

Meteor.startup(function () {
    console.log('tessste');
});


FlowRouter.route('/', {
    action(){
        mount(MainLayout,{
            content: (<ResolutionsWrapper />)
        })
    }
});
