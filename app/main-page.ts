import { EventData, ListView, Page, StackLayout } from '@nativescript/core'
import { RiveView, TypeRiveLoop } from '@nativescript/rive';
import { HelloWorldModel } from './main-view-model'

let start = false;

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new HelloWorldModel();
  const rive = new RiveView();
  rive.width = 120;
  rive.height = 120;
  rive.src = '~/assets/rive/liquid-download.riv';
  (<any>rive).stateMachine = 'Guido SM';
  rive.on('tap', () => {
    console.log('tap');
    start = !start;
    rive.triggerInputValue('Downloading', start);
    rive.triggerInputValue('Progress', 60);
  });

  
  // (<any>rive).stateMachine = 'state';
  // tv.play();
  const top = new RiveView();
  top.height = 152;
  top.width = 1120;
  top.src = '~/assets/rive/top-section-placeholder.riv';
  
  const list = new ListView();
  list.itemTemplate = () => makePH();
  list.rowHeight = 156;
  list.items = [1, 2, 3, 4, 5]

  const stack = (<StackLayout>page.getViewById('main'))
  stack.addChild(rive);
  
  stack.addChild(top);
  stack.addChild(list);
}

function makePH() {
  const tv = new RiveView();
  tv.height = 152;
  tv.width = 215;
  tv.src = '~/assets/rive/thread-placeholder.riv';
  return tv;
}