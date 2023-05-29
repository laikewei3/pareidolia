/******************* 
 * Pareidolia Test *
 *******************/


// store info about the experiment session:
let expName = 'pareidolia';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const demoRepsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(demoRepsLoopBegin(demoRepsLoopScheduler));
flowScheduler.add(demoRepsLoopScheduler);
flowScheduler.add(demoRepsLoopEnd);
flowScheduler.add(ExpIntructionRoutineBegin());
flowScheduler.add(ExpIntructionRoutineEachFrame());
flowScheduler.add(ExpIntructionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(GoodByeRoutineBegin());
flowScheduler.add(GoodByeRoutineEachFrame());
flowScheduler.add(GoodByeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'demo.xlsx', 'path': 'demo.xlsx'},
    {'name': 'images/demo (1).png', 'path': 'images/demo (1).png'},
    {'name': 'images/demo (2).png', 'path': 'images/demo (2).png'},
    {'name': 'images/demo (3).png', 'path': 'images/demo (3).png'},
    {'name': 'images/demo (4).png', 'path': 'images/demo (4).png'},
    {'name': 'images/demo (5).png', 'path': 'images/demo (5).png'},
    {'name': 'images/demo (6).png', 'path': 'images/demo (6).png'},
    {'name': 'images/demo (7).png', 'path': 'images/demo (7).png'},
    {'name': 'images/demo (8).png', 'path': 'images/demo (8).png'},
    {'name': 'images/demo (9).png', 'path': 'images/demo (9).png'},
    {'name': 'images/demo (10).png', 'path': 'images/demo (10).png'},
    {'name': 'images/demo (11).jpg', 'path': 'images/demo (11).jpg'},
    {'name': 'images/demo (12).jpg', 'path': 'images/demo (12).jpg'},
    {'name': 'images/demo (13).jpg', 'path': 'images/demo (13).jpg'},
    {'name': 'images/demo (14).jpg', 'path': 'images/demo (14).jpg'},
    {'name': 'images/demo (15).png', 'path': 'images/demo (15).png'},
    {'name': 'images/demo (16).png', 'path': 'images/demo (16).png'},
    {'name': 'images/demo (17).png', 'path': 'images/demo (17).png'},
    {'name': 'images/demo (18).png', 'path': 'images/demo (18).png'},
    {'name': 'images/demo (19).png', 'path': 'images/demo (19).png'},
    {'name': 'images/demo (20).jpg', 'path': 'images/demo (20).jpg'},
    {'name': 'images/demo (21).jpg', 'path': 'images/demo (21).jpg'},
    {'name': 'pareidolia.xlsx', 'path': 'pareidolia.xlsx'},
    {'name': 'images/F - Bag.jpg', 'path': 'images/F - Bag.jpg'},
    {'name': 'images/F - Coffee.png', 'path': 'images/F - Coffee.png'},
    {'name': 'images/F - Elec-Plug.jpg', 'path': 'images/F - Elec-Plug.jpg'},
    {'name': 'images/F - Mugs.jpg', 'path': 'images/F - Mugs.jpg'},
    {'name': 'images/F - Onion.jpg', 'path': 'images/F - Onion.jpg'},
    {'name': 'images/F - Tiang.jpg', 'path': 'images/F - Tiang.jpg'},
    {'name': 'images/F - Tree.jpg', 'path': 'images/F - Tree.jpg'},
    {'name': 'images/F - Bag 2.jpg', 'path': 'images/F - Bag 2.jpg'},
    {'name': 'images/F - House.jpg', 'path': 'images/F - House.jpg'},
    {'name': 'images/F - Vege.jpg', 'path': 'images/F - Vege.jpg'},
    {'name': 'images/NF - Elec-Plug.jpg', 'path': 'images/NF - Elec-Plug.jpg'},
    {'name': 'images/NF - Bag 2.jpg', 'path': 'images/NF - Bag 2.jpg'},
    {'name': 'images/NF - Bag.jpg', 'path': 'images/NF - Bag.jpg'},
    {'name': 'images/NF - Coffee.jpg', 'path': 'images/NF - Coffee.jpg'},
    {'name': 'images/NF - House.jpg', 'path': 'images/NF - House.jpg'},
    {'name': 'images/NF - Tree.jpg', 'path': 'images/NF - Tree.jpg'},
    {'name': 'images/NF - Mugs.jpg', 'path': 'images/NF - Mugs.jpg'},
    {'name': 'images/NF - Onion.jpg', 'path': 'images/NF - Onion.jpg'},
    {'name': 'images/NF - Tiang.jpg', 'path': 'images/NF - Tiang.jpg'},
    {'name': 'images/NF - Vege.png', 'path': 'images/NF - Vege.png'},
    {'name': 'images/AF - Aquamarine.png', 'path': 'images/AF - Aquamarine.png'},
    {'name': 'images/AF - girl 1.png', 'path': 'images/AF - girl 1.png'},
    {'name': 'images/AF - girl 2.png', 'path': 'images/AF - girl 2.png'},
    {'name': 'images/AF - HoshinoAI.png', 'path': 'images/AF - HoshinoAI.png'},
    {'name': 'images/AF - Cat.jpg', 'path': 'images/AF - Cat.jpg'},
    {'name': 'images/AF - Duck.png', 'path': 'images/AF - Duck.png'},
    {'name': 'images/AF - Fox.jpg', 'path': 'images/AF - Fox.jpg'},
    {'name': 'images/AF - Knight.png', 'path': 'images/AF - Knight.png'},
    {'name': 'images/AF - Otter.jpg', 'path': 'images/AF - Otter.jpg'},
    {'name': 'images/AF - Panda.jpg', 'path': 'images/AF - Panda.jpg'},
    {'name': 'images/AF- Dance.png', 'path': 'images/AF- Dance.png'},
    {'name': 'images/ANF - Cat.jpg', 'path': 'images/ANF - Cat.jpg'},
    {'name': 'images/ANF - Fox.jpg', 'path': 'images/ANF - Fox.jpg'},
    {'name': 'images/ANF - girl 1.png', 'path': 'images/ANF - girl 1.png'},
    {'name': 'images/ANF - knight.png', 'path': 'images/ANF - knight.png'},
    {'name': 'images/ANF - Otter.jpg', 'path': 'images/ANF - Otter.jpg'},
    {'name': 'images/ANF- Dance.png', 'path': 'images/ANF- Dance.png'},
    {'name': 'images/F - Chilli.png', 'path': 'images/F - Chilli.png'},
    {'name': 'images/NF - Chilli.png', 'path': 'images/NF - Chilli.png'},
    {'name': 'images/ANF - Aquamarine.png', 'path': 'images/ANF - Aquamarine.png'},
    {'name': 'images/ANF - Duck.png', 'path': 'images/ANF - Duck.png'},
    {'name': 'images/ANF - girl 2.png', 'path': 'images/ANF - girl 2.png'},
    {'name': 'images/ANF - HoshinoAI.png', 'path': 'images/ANF - HoshinoAI.png'},
    {'name': 'images/ANF - Panda.jpg', 'path': 'images/ANF - Panda.jpg'},
    {'name': 'images/NF - Wall.jpg', 'path': 'images/NF - Wall.jpg'},
    {'name': 'images/NF - Plant.png', 'path': 'images/NF - Plant.png'},
    {'name': 'images/NF - Object.jpg', 'path': 'images/NF - Object.jpg'},
    {'name': 'images/NF - Moon.png', 'path': 'images/NF - Moon.png'},
    {'name': 'images/F - Plant.png', 'path': 'images/F - Plant.png'},
    {'name': 'images/F - Object.png', 'path': 'images/F - Object.png'},
    {'name': 'images/F - Moon.png', 'path': 'images/F - Moon.png'},
    {'name': 'images/ANF- Dog.jpg', 'path': 'images/ANF- Dog.jpg'},
    {'name': 'images/ANF - tiger.jpg', 'path': 'images/ANF - tiger.jpg'},
    {'name': 'images/ANF - Sea.jpg', 'path': 'images/ANF - Sea.jpg'},
    {'name': 'images/ANF - Elephant.png', 'path': 'images/ANF - Elephant.png'},
    {'name': 'images/AF - Sea.jpg', 'path': 'images/AF - Sea.jpg'},
    {'name': 'images/AF- Dog.jpg', 'path': 'images/AF- Dog.jpg'},
    {'name': 'images/AF - tiger.jpg', 'path': 'images/AF - tiger.jpg'},
    {'name': 'images/F - Wall.png', 'path': 'images/F - Wall.png'},
    {'name': 'images/AF - Elephant.png', 'path': 'images/AF - Elephant.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.2';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var instructionClock;
var Instruction;
var instruction_resp;
var demoClock;
var startDemo;
var demoInstruction;
var demoFixation;
var demoImage;
var demoResp;
var demoloopClock;
var Feedback;
var demoLoop;
var demoLoopResp;
var ExpIntructionClock;
var ExpInstruc;
var continueExp;
var trialClock;
var fixation;
var expImg;
var exp_resp;
var trialFeedbackClock;
var expFeedback;
var GoodByeClock;
var goodbye;
var goodbye_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  Instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction',
    text: "In this section of the experiment, we will be conducting a speeded test. You will be presented with a series of images, and your task is to indicate whether you see a face or not by clicking 'y' for yes and 'n' for no.\n\nClick 'y' to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "demo"
  demoClock = new util.Clock();
  startDemo = new visual.TextStim({
    win: psychoJS.window,
    name: 'startDemo',
    text: 'Before we start, let us try a demo.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  demoInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'demoInstruction',
    text: "Press 'y' if you see any face/ face-like object, if not, press 'n'",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  demoFixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'demoFixation', 
    vertices: 'cross', size:[0.5, 0.5],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  demoImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'demoImage', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  demoResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "demoloop"
  demoloopClock = new util.Clock();
  Feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'Feedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  demoLoop = new visual.TextStim({
    win: psychoJS.window,
    name: 'demoLoop',
    text: "Press ‘y' to continue to the experiment, 'n' to try again the demo.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  demoLoopResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ExpIntruction"
  ExpIntructionClock = new util.Clock();
  ExpInstruc = new visual.TextStim({
    win: psychoJS.window,
    name: 'ExpInstruc',
    text: "Press 'y' if you see any face/ face-like object, if not, press 'n'.\n\nClick 'y' whenever you are ready.\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continueExp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation', 
    vertices: 'cross', size:[0.5, 0.5],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  expImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'expImg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  exp_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trialFeedback"
  trialFeedbackClock = new util.Clock();
  expFeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'expFeedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "GoodBye"
  GoodByeClock = new util.Clock();
  goodbye = new visual.TextStim({
    win: psychoJS.window,
    name: 'goodbye',
    text: "You completed this section. Now u will be directed to the last section.\n\nClick 'y' to proceed.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  goodbye_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _instruction_resp_allKeys;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instruction_resp.keys = undefined;
    instruction_resp.rt = undefined;
    _instruction_resp_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(Instruction);
    instructionComponents.push(instruction_resp);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction* updates
    if (t >= 0.0 && Instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction.tStart = t;  // (not accounting for frame time here)
      Instruction.frameNStart = frameN;  // exact frame index
      
      Instruction.setAutoDraw(true);
    }

    
    // *instruction_resp* updates
    if (t >= 0.0 && instruction_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_resp.tStart = t;  // (not accounting for frame time here)
      instruction_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_resp.clearEvents(); });
    }

    if (instruction_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_resp.getKeys({keyList: ['y'], waitRelease: false});
      _instruction_resp_allKeys = _instruction_resp_allKeys.concat(theseKeys);
      if (_instruction_resp_allKeys.length > 0) {
        instruction_resp.keys = _instruction_resp_allKeys[_instruction_resp_allKeys.length - 1].name;  // just the last key pressed
        instruction_resp.rt = _instruction_resp_allKeys[_instruction_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction_resp.corr, level);
    }
    psychoJS.experiment.addData('instruction_resp.keys', instruction_resp.keys);
    if (typeof instruction_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_resp.rt', instruction_resp.rt);
        routineTimer.reset();
        }
    
    instruction_resp.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demoReps;
function demoRepsLoopBegin(demoRepsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    demoReps = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 19, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'demo.xlsx',
      seed: undefined, name: 'demoReps'
    });
    psychoJS.experiment.addLoop(demoReps); // add the loop to the experiment
    currentLoop = demoReps;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    demoReps.forEach(function() {
      snapshot = demoReps.getSnapshot();
    
      demoRepsLoopScheduler.add(importConditions(snapshot));
      demoRepsLoopScheduler.add(demoRoutineBegin(snapshot));
      demoRepsLoopScheduler.add(demoRoutineEachFrame());
      demoRepsLoopScheduler.add(demoRoutineEnd(snapshot));
      demoRepsLoopScheduler.add(demoloopRoutineBegin(snapshot));
      demoRepsLoopScheduler.add(demoloopRoutineEachFrame());
      demoRepsLoopScheduler.add(demoloopRoutineEnd(snapshot));
      demoRepsLoopScheduler.add(demoRepsLoopEndIteration(demoRepsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function demoRepsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(demoReps);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function demoRepsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 44, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'pareidolia.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialFeedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialFeedbackRoutineEachFrame());
      trialsLoopScheduler.add(trialFeedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _demoResp_allKeys;
var demo_result;
var demoComponents;
function demoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo' ---
    t = 0;
    demoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.500000);
    // update component parameters for each repeat
    demoImage.setImage(stimuli);
    demoResp.keys = undefined;
    demoResp.rt = undefined;
    _demoResp_allKeys = [];
    // Run 'Begin Routine' code from checkResult
    demo_result = "Input Error";
    
    // keep track of which components have finished
    demoComponents = [];
    demoComponents.push(startDemo);
    demoComponents.push(demoInstruction);
    demoComponents.push(demoFixation);
    demoComponents.push(demoImage);
    demoComponents.push(demoResp);
    
    demoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function demoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo' ---
    // get current time
    t = demoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *startDemo* updates
    if (t >= 0.0 && startDemo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startDemo.tStart = t;  // (not accounting for frame time here)
      startDemo.frameNStart = frameN;  // exact frame index
      
      startDemo.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (startDemo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      startDemo.setAutoDraw(false);
    }
    
    // *demoInstruction* updates
    if (t >= 1 && demoInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoInstruction.tStart = t;  // (not accounting for frame time here)
      demoInstruction.frameNStart = frameN;  // exact frame index
      
      demoInstruction.setAutoDraw(true);
    }

    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demoInstruction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demoInstruction.setAutoDraw(false);
    }
    
    // *demoFixation* updates
    if (t >= 2 && demoFixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoFixation.tStart = t;  // (not accounting for frame time here)
      demoFixation.frameNStart = frameN;  // exact frame index
      
      demoFixation.setAutoDraw(true);
    }

    frameRemains = 2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demoFixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demoFixation.setAutoDraw(false);
    }
    
    // *demoImage* updates
    if (t >= 2.5 && demoImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoImage.tStart = t;  // (not accounting for frame time here)
      demoImage.frameNStart = frameN;  // exact frame index
      
      demoImage.setAutoDraw(true);
    }

    frameRemains = 2.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demoImage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demoImage.setAutoDraw(false);
    }
    
    // *demoResp* updates
    if (t >= 2.5 && demoResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoResp.tStart = t;  // (not accounting for frame time here)
      demoResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { demoResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { demoResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { demoResp.clearEvents(); });
    }

    frameRemains = 2.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (demoResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      demoResp.status = PsychoJS.Status.FINISHED;
  }

    if (demoResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = demoResp.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _demoResp_allKeys = _demoResp_allKeys.concat(theseKeys);
      if (_demoResp_allKeys.length > 0) {
        demoResp.keys = _demoResp_allKeys[_demoResp_allKeys.length - 1].name;  // just the last key pressed
        demoResp.rt = _demoResp_allKeys[_demoResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo' ---
    demoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(demoResp.corr, level);
    }
    psychoJS.experiment.addData('demoResp.keys', demoResp.keys);
    if (typeof demoResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('demoResp.rt', demoResp.rt);
        routineTimer.reset();
        }
    
    demoResp.stop();
    // Run 'End Routine' code from checkResult
    if ((demo_face === demoResp.keys)) {
        demo_result = "Correct";
    } else {
        if ((demo_face !== demoResp.keys)) {
            demo_result = "Wrong";
        } else {
            demo_result = "Input Error";
        }
    }
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _demoLoopResp_allKeys;
var demoloopComponents;
function demoloopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demoloop' ---
    t = 0;
    demoloopClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Feedback.setText(demo_result);
    demoLoopResp.keys = undefined;
    demoLoopResp.rt = undefined;
    _demoLoopResp_allKeys = [];
    // keep track of which components have finished
    demoloopComponents = [];
    demoloopComponents.push(Feedback);
    demoloopComponents.push(demoLoop);
    demoloopComponents.push(demoLoopResp);
    
    demoloopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function demoloopRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demoloop' ---
    // get current time
    t = demoloopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Feedback* updates
    if (t >= 0.0 && Feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Feedback.tStart = t;  // (not accounting for frame time here)
      Feedback.frameNStart = frameN;  // exact frame index
      
      Feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Feedback.setAutoDraw(false);
    }
    
    // *demoLoop* updates
    if (t >= 1 && demoLoop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoLoop.tStart = t;  // (not accounting for frame time here)
      demoLoop.frameNStart = frameN;  // exact frame index
      
      demoLoop.setAutoDraw(true);
    }

    
    // *demoLoopResp* updates
    if (t >= 1 && demoLoopResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demoLoopResp.tStart = t;  // (not accounting for frame time here)
      demoLoopResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { demoLoopResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { demoLoopResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { demoLoopResp.clearEvents(); });
    }

    if (demoLoopResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = demoLoopResp.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _demoLoopResp_allKeys = _demoLoopResp_allKeys.concat(theseKeys);
      if (_demoLoopResp_allKeys.length > 0) {
        demoLoopResp.keys = _demoLoopResp_allKeys[_demoLoopResp_allKeys.length - 1].name;  // just the last key pressed
        demoLoopResp.rt = _demoLoopResp_allKeys[_demoLoopResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demoloopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demoloopRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demoloop' ---
    demoloopComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(demoLoopResp.corr, level);
    }
    psychoJS.experiment.addData('demoLoopResp.keys', demoLoopResp.keys);
    if (typeof demoLoopResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('demoLoopResp.rt', demoLoopResp.rt);
        routineTimer.reset();
        }
    
    demoLoopResp.stop();
    // Run 'End Routine' code from demoCode
    if ((demoLoopResp.keys === "y")) {
        demoReps.finished = true;
    }
    
    // the Routine "demoloop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _continueExp_allKeys;
var ExpIntructionComponents;
function ExpIntructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ExpIntruction' ---
    t = 0;
    ExpIntructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    continueExp.keys = undefined;
    continueExp.rt = undefined;
    _continueExp_allKeys = [];
    // keep track of which components have finished
    ExpIntructionComponents = [];
    ExpIntructionComponents.push(ExpInstruc);
    ExpIntructionComponents.push(continueExp);
    
    ExpIntructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ExpIntructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ExpIntruction' ---
    // get current time
    t = ExpIntructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ExpInstruc* updates
    if (t >= 0.0 && ExpInstruc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ExpInstruc.tStart = t;  // (not accounting for frame time here)
      ExpInstruc.frameNStart = frameN;  // exact frame index
      
      ExpInstruc.setAutoDraw(true);
    }

    
    // *continueExp* updates
    if (t >= 0.0 && continueExp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continueExp.tStart = t;  // (not accounting for frame time here)
      continueExp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { continueExp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { continueExp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { continueExp.clearEvents(); });
    }

    if (continueExp.status === PsychoJS.Status.STARTED) {
      let theseKeys = continueExp.getKeys({keyList: ['y'], waitRelease: false});
      _continueExp_allKeys = _continueExp_allKeys.concat(theseKeys);
      if (_continueExp_allKeys.length > 0) {
        continueExp.keys = _continueExp_allKeys[_continueExp_allKeys.length - 1].name;  // just the last key pressed
        continueExp.rt = _continueExp_allKeys[_continueExp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ExpIntructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ExpIntructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ExpIntruction' ---
    ExpIntructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(continueExp.corr, level);
    }
    psychoJS.experiment.addData('continueExp.keys', continueExp.keys);
    if (typeof continueExp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('continueExp.rt', continueExp.rt);
        routineTimer.reset();
        }
    
    continueExp.stop();
    // the Routine "ExpIntruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exp_resp_allKeys;
var expResult;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.500000);
    // update component parameters for each repeat
    expImg.setImage(stimuli_images);
    exp_resp.keys = undefined;
    exp_resp.rt = undefined;
    _exp_resp_allKeys = [];
    // Run 'Begin Routine' code from expCode
    expResult = "Error";
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fixation);
    trialComponents.push(expImg);
    trialComponents.push(exp_resp);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *expImg* updates
    if (t >= 0.5 && expImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      expImg.tStart = t;  // (not accounting for frame time here)
      expImg.frameNStart = frameN;  // exact frame index
      
      expImg.setAutoDraw(true);
    }

    frameRemains = 0.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (expImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      expImg.setAutoDraw(false);
    }
    
    // *exp_resp* updates
    if (t >= 0.5 && exp_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_resp.tStart = t;  // (not accounting for frame time here)
      exp_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exp_resp.clearEvents(); });
    }

    frameRemains = 0.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exp_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp_resp.status = PsychoJS.Status.FINISHED;
  }

    if (exp_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp_resp.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _exp_resp_allKeys = _exp_resp_allKeys.concat(theseKeys);
      if (_exp_resp_allKeys.length > 0) {
        exp_resp.keys = _exp_resp_allKeys[_exp_resp_allKeys.length - 1].name;  // just the last key pressed
        exp_resp.rt = _exp_resp_allKeys[_exp_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(exp_resp.corr, level);
    }
    psychoJS.experiment.addData('exp_resp.keys', exp_resp.keys);
    if (typeof exp_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exp_resp.rt', exp_resp.rt);
        routineTimer.reset();
        }
    
    exp_resp.stop();
    // Run 'End Routine' code from expCode
    if ((face === exp_resp.keys)) {
        expResult = "Correct";
    } else {
        if ((face !== exp_resp.keys)) {
            expResult = "Wrong";
        } else {
            expResult = "Input Error";
        }
    }
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialFeedbackComponents;
function trialFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trialFeedback' ---
    t = 0;
    trialFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    expFeedback.setText(expResult);
    // keep track of which components have finished
    trialFeedbackComponents = [];
    trialFeedbackComponents.push(expFeedback);
    
    trialFeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialFeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trialFeedback' ---
    // get current time
    t = trialFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *expFeedback* updates
    if (t >= 0.0 && expFeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      expFeedback.tStart = t;  // (not accounting for frame time here)
      expFeedback.frameNStart = frameN;  // exact frame index
      
      expFeedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (expFeedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      expFeedback.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialFeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialFeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trialFeedback' ---
    trialFeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code
    if ((trials.thisN === 59)) {
        trials.finished = true;
    }
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _goodbye_resp_allKeys;
var GoodByeComponents;
function GoodByeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GoodBye' ---
    t = 0;
    GoodByeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    goodbye_resp.keys = undefined;
    goodbye_resp.rt = undefined;
    _goodbye_resp_allKeys = [];
    // keep track of which components have finished
    GoodByeComponents = [];
    GoodByeComponents.push(goodbye);
    GoodByeComponents.push(goodbye_resp);
    
    GoodByeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function GoodByeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GoodBye' ---
    // get current time
    t = GoodByeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *goodbye* updates
    if (t >= 0.0 && goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      goodbye.tStart = t;  // (not accounting for frame time here)
      goodbye.frameNStart = frameN;  // exact frame index
      
      goodbye.setAutoDraw(true);
    }

    
    // *goodbye_resp* updates
    if (t >= 0.0 && goodbye_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      goodbye_resp.tStart = t;  // (not accounting for frame time here)
      goodbye_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { goodbye_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { goodbye_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { goodbye_resp.clearEvents(); });
    }

    if (goodbye_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = goodbye_resp.getKeys({keyList: ['y'], waitRelease: false});
      _goodbye_resp_allKeys = _goodbye_resp_allKeys.concat(theseKeys);
      if (_goodbye_resp_allKeys.length > 0) {
        goodbye_resp.keys = _goodbye_resp_allKeys[_goodbye_resp_allKeys.length - 1].name;  // just the last key pressed
        goodbye_resp.rt = _goodbye_resp_allKeys[_goodbye_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GoodByeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodByeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GoodBye' ---
    GoodByeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(goodbye_resp.corr, level);
    }
    psychoJS.experiment.addData('goodbye_resp.keys', goodbye_resp.keys);
    if (typeof goodbye_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('goodbye_resp.rt', goodbye_resp.rt);
        routineTimer.reset();
        }
    
    goodbye_resp.stop();
    // the Routine "GoodBye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
