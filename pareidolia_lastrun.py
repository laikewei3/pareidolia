#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.1.2),
    on May 29, 2023, at 14:57
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2023.1.2'
expName = 'pareidolia'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\Wei\\Downloads\\Pareidolia\\pareidolia_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1707, 1067], fullscr=False, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    backgroundImage='', backgroundFit='none',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = True
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "instruction" ---
Instruction = visual.TextStim(win=win, name='Instruction',
    text="In this section of the experiment, we will be conducting a speeded test. You will be presented with a series of images, and your task is to indicate whether you see a face or not by clicking 'y' for yes and 'n' for no.\n\nClick 'y' to continue.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
instruction_resp = keyboard.Keyboard()

# --- Initialize components for Routine "demo" ---
startDemo = visual.TextStim(win=win, name='startDemo',
    text='Before we start, let us try a demo.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
demoInstruction = visual.TextStim(win=win, name='demoInstruction',
    text="Press 'y' if you see any face/ face-like object, if not, press 'n'",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
demoFixation = visual.ShapeStim(
    win=win, name='demoFixation', vertices='cross',
    size=(0.5, 0.5),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-2.0, interpolate=True)
demoImage = visual.ImageStim(
    win=win,
    name='demoImage', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
demoResp = keyboard.Keyboard()

# --- Initialize components for Routine "demoloop" ---
Feedback = visual.TextStim(win=win, name='Feedback',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
demoLoop = visual.TextStim(win=win, name='demoLoop',
    text="Press ‘y' to continue to the experiment, 'n' to try again the demo.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
demoLoopResp = keyboard.Keyboard()

# --- Initialize components for Routine "ExpIntruction" ---
ExpInstruc = visual.TextStim(win=win, name='ExpInstruc',
    text="Press 'y' if you see any face/ face-like object, if not, press 'n'.\n\nClick 'y' whenever you are ready.\n",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
continueExp = keyboard.Keyboard()

# --- Initialize components for Routine "trial" ---
fixation = visual.ShapeStim(
    win=win, name='fixation', vertices='cross',
    size=(0.5, 0.5),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)
expImg = visual.ImageStim(
    win=win,
    name='expImg', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
exp_resp = keyboard.Keyboard()

# --- Initialize components for Routine "trialFeedback" ---
expFeedback = visual.TextStim(win=win, name='expFeedback',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "GoodBye" ---
goodbye = visual.TextStim(win=win, name='goodbye',
    text="You completed this section. Now u will be directed to the last section.\n\nClick 'y' to proceed.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
goodbye_resp = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "instruction" ---
continueRoutine = True
# update component parameters for each repeat
instruction_resp.keys = []
instruction_resp.rt = []
_instruction_resp_allKeys = []
# keep track of which components have finished
instructionComponents = [Instruction, instruction_resp]
for thisComponent in instructionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instruction" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Instruction* updates
    
    # if Instruction is starting this frame...
    if Instruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Instruction.frameNStart = frameN  # exact frame index
        Instruction.tStart = t  # local t and not account for scr refresh
        Instruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Instruction, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Instruction.started')
        # update status
        Instruction.status = STARTED
        Instruction.setAutoDraw(True)
    
    # if Instruction is active this frame...
    if Instruction.status == STARTED:
        # update params
        pass
    
    # *instruction_resp* updates
    waitOnFlip = False
    
    # if instruction_resp is starting this frame...
    if instruction_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_resp.frameNStart = frameN  # exact frame index
        instruction_resp.tStart = t  # local t and not account for scr refresh
        instruction_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_resp, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instruction_resp.started')
        # update status
        instruction_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instruction_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instruction_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instruction_resp.status == STARTED and not waitOnFlip:
        theseKeys = instruction_resp.getKeys(keyList=['y'], waitRelease=False)
        _instruction_resp_allKeys.extend(theseKeys)
        if len(_instruction_resp_allKeys):
            instruction_resp.keys = _instruction_resp_allKeys[-1].name  # just the last key pressed
            instruction_resp.rt = _instruction_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instruction" ---
for thisComponent in instructionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if instruction_resp.keys in ['', [], None]:  # No response was made
    instruction_resp.keys = None
thisExp.addData('instruction_resp.keys',instruction_resp.keys)
if instruction_resp.keys != None:  # we had a response
    thisExp.addData('instruction_resp.rt', instruction_resp.rt)
thisExp.nextEntry()
# the Routine "instruction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
demoReps = data.TrialHandler(nReps=19.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('demo.xlsx'),
    seed=None, name='demoReps')
thisExp.addLoop(demoReps)  # add the loop to the experiment
thisDemoRep = demoReps.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisDemoRep.rgb)
if thisDemoRep != None:
    for paramName in thisDemoRep:
        exec('{} = thisDemoRep[paramName]'.format(paramName))

for thisDemoRep in demoReps:
    currentLoop = demoReps
    # abbreviate parameter names if possible (e.g. rgb = thisDemoRep.rgb)
    if thisDemoRep != None:
        for paramName in thisDemoRep:
            exec('{} = thisDemoRep[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "demo" ---
    continueRoutine = True
    # update component parameters for each repeat
    demoImage.setImage(stimuli)
    demoResp.keys = []
    demoResp.rt = []
    _demoResp_allKeys = []
    # Run 'Begin Routine' code from checkResult
    demo_result = "Input Error"
    # keep track of which components have finished
    demoComponents = [startDemo, demoInstruction, demoFixation, demoImage, demoResp]
    for thisComponent in demoComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "demo" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 5.5:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *startDemo* updates
        
        # if startDemo is starting this frame...
        if startDemo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            startDemo.frameNStart = frameN  # exact frame index
            startDemo.tStart = t  # local t and not account for scr refresh
            startDemo.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(startDemo, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'startDemo.started')
            # update status
            startDemo.status = STARTED
            startDemo.setAutoDraw(True)
        
        # if startDemo is active this frame...
        if startDemo.status == STARTED:
            # update params
            pass
        
        # if startDemo is stopping this frame...
        if startDemo.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > startDemo.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                startDemo.tStop = t  # not accounting for scr refresh
                startDemo.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'startDemo.stopped')
                # update status
                startDemo.status = FINISHED
                startDemo.setAutoDraw(False)
        
        # *demoInstruction* updates
        
        # if demoInstruction is starting this frame...
        if demoInstruction.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            demoInstruction.frameNStart = frameN  # exact frame index
            demoInstruction.tStart = t  # local t and not account for scr refresh
            demoInstruction.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(demoInstruction, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'demoInstruction.started')
            # update status
            demoInstruction.status = STARTED
            demoInstruction.setAutoDraw(True)
        
        # if demoInstruction is active this frame...
        if demoInstruction.status == STARTED:
            # update params
            pass
        
        # if demoInstruction is stopping this frame...
        if demoInstruction.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > demoInstruction.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                demoInstruction.tStop = t  # not accounting for scr refresh
                demoInstruction.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'demoInstruction.stopped')
                # update status
                demoInstruction.status = FINISHED
                demoInstruction.setAutoDraw(False)
        
        # *demoFixation* updates
        
        # if demoFixation is starting this frame...
        if demoFixation.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            demoFixation.frameNStart = frameN  # exact frame index
            demoFixation.tStart = t  # local t and not account for scr refresh
            demoFixation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(demoFixation, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'demoFixation.started')
            # update status
            demoFixation.status = STARTED
            demoFixation.setAutoDraw(True)
        
        # if demoFixation is active this frame...
        if demoFixation.status == STARTED:
            # update params
            pass
        
        # if demoFixation is stopping this frame...
        if demoFixation.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > demoFixation.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                demoFixation.tStop = t  # not accounting for scr refresh
                demoFixation.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'demoFixation.stopped')
                # update status
                demoFixation.status = FINISHED
                demoFixation.setAutoDraw(False)
        
        # *demoImage* updates
        
        # if demoImage is starting this frame...
        if demoImage.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            demoImage.frameNStart = frameN  # exact frame index
            demoImage.tStart = t  # local t and not account for scr refresh
            demoImage.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(demoImage, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'demoImage.started')
            # update status
            demoImage.status = STARTED
            demoImage.setAutoDraw(True)
        
        # if demoImage is active this frame...
        if demoImage.status == STARTED:
            # update params
            pass
        
        # if demoImage is stopping this frame...
        if demoImage.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > demoImage.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                demoImage.tStop = t  # not accounting for scr refresh
                demoImage.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'demoImage.stopped')
                # update status
                demoImage.status = FINISHED
                demoImage.setAutoDraw(False)
        
        # *demoResp* updates
        waitOnFlip = False
        
        # if demoResp is starting this frame...
        if demoResp.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            demoResp.frameNStart = frameN  # exact frame index
            demoResp.tStart = t  # local t and not account for scr refresh
            demoResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(demoResp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'demoResp.started')
            # update status
            demoResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(demoResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(demoResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if demoResp is stopping this frame...
        if demoResp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > demoResp.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                demoResp.tStop = t  # not accounting for scr refresh
                demoResp.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'demoResp.stopped')
                # update status
                demoResp.status = FINISHED
                demoResp.status = FINISHED
        if demoResp.status == STARTED and not waitOnFlip:
            theseKeys = demoResp.getKeys(keyList=['y','n'], waitRelease=False)
            _demoResp_allKeys.extend(theseKeys)
            if len(_demoResp_allKeys):
                demoResp.keys = _demoResp_allKeys[-1].name  # just the last key pressed
                demoResp.rt = _demoResp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in demoComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "demo" ---
    for thisComponent in demoComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if demoResp.keys in ['', [], None]:  # No response was made
        demoResp.keys = None
    demoReps.addData('demoResp.keys',demoResp.keys)
    if demoResp.keys != None:  # we had a response
        demoReps.addData('demoResp.rt', demoResp.rt)
    # Run 'End Routine' code from checkResult
    if demo_face == demoResp.keys:
        demo_result = "Correct"
    elif demo_face != demoResp.keys:
        demo_result = "Wrong"
    else:
        demo_result = "Input Error"
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-5.500000)
    
    # --- Prepare to start Routine "demoloop" ---
    continueRoutine = True
    # update component parameters for each repeat
    Feedback.setText(demo_result)
    demoLoopResp.keys = []
    demoLoopResp.rt = []
    _demoLoopResp_allKeys = []
    # keep track of which components have finished
    demoloopComponents = [Feedback, demoLoop, demoLoopResp]
    for thisComponent in demoloopComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "demoloop" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Feedback* updates
        
        # if Feedback is starting this frame...
        if Feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Feedback.frameNStart = frameN  # exact frame index
            Feedback.tStart = t  # local t and not account for scr refresh
            Feedback.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Feedback, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Feedback.started')
            # update status
            Feedback.status = STARTED
            Feedback.setAutoDraw(True)
        
        # if Feedback is active this frame...
        if Feedback.status == STARTED:
            # update params
            pass
        
        # if Feedback is stopping this frame...
        if Feedback.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Feedback.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                Feedback.tStop = t  # not accounting for scr refresh
                Feedback.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Feedback.stopped')
                # update status
                Feedback.status = FINISHED
                Feedback.setAutoDraw(False)
        
        # *demoLoop* updates
        
        # if demoLoop is starting this frame...
        if demoLoop.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            demoLoop.frameNStart = frameN  # exact frame index
            demoLoop.tStart = t  # local t and not account for scr refresh
            demoLoop.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(demoLoop, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'demoLoop.started')
            # update status
            demoLoop.status = STARTED
            demoLoop.setAutoDraw(True)
        
        # if demoLoop is active this frame...
        if demoLoop.status == STARTED:
            # update params
            pass
        
        # *demoLoopResp* updates
        waitOnFlip = False
        
        # if demoLoopResp is starting this frame...
        if demoLoopResp.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            demoLoopResp.frameNStart = frameN  # exact frame index
            demoLoopResp.tStart = t  # local t and not account for scr refresh
            demoLoopResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(demoLoopResp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'demoLoopResp.started')
            # update status
            demoLoopResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(demoLoopResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(demoLoopResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if demoLoopResp.status == STARTED and not waitOnFlip:
            theseKeys = demoLoopResp.getKeys(keyList=['y','n'], waitRelease=False)
            _demoLoopResp_allKeys.extend(theseKeys)
            if len(_demoLoopResp_allKeys):
                demoLoopResp.keys = _demoLoopResp_allKeys[-1].name  # just the last key pressed
                demoLoopResp.rt = _demoLoopResp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in demoloopComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "demoloop" ---
    for thisComponent in demoloopComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if demoLoopResp.keys in ['', [], None]:  # No response was made
        demoLoopResp.keys = None
    demoReps.addData('demoLoopResp.keys',demoLoopResp.keys)
    if demoLoopResp.keys != None:  # we had a response
        demoReps.addData('demoLoopResp.rt', demoLoopResp.rt)
    # Run 'End Routine' code from demoCode
    if demoLoopResp.keys == 'y':
        demoReps.finished = True;
    # the Routine "demoloop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 19.0 repeats of 'demoReps'


# --- Prepare to start Routine "ExpIntruction" ---
continueRoutine = True
# update component parameters for each repeat
continueExp.keys = []
continueExp.rt = []
_continueExp_allKeys = []
# keep track of which components have finished
ExpIntructionComponents = [ExpInstruc, continueExp]
for thisComponent in ExpIntructionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ExpIntruction" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ExpInstruc* updates
    
    # if ExpInstruc is starting this frame...
    if ExpInstruc.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ExpInstruc.frameNStart = frameN  # exact frame index
        ExpInstruc.tStart = t  # local t and not account for scr refresh
        ExpInstruc.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ExpInstruc, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ExpInstruc.started')
        # update status
        ExpInstruc.status = STARTED
        ExpInstruc.setAutoDraw(True)
    
    # if ExpInstruc is active this frame...
    if ExpInstruc.status == STARTED:
        # update params
        pass
    
    # *continueExp* updates
    waitOnFlip = False
    
    # if continueExp is starting this frame...
    if continueExp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        continueExp.frameNStart = frameN  # exact frame index
        continueExp.tStart = t  # local t and not account for scr refresh
        continueExp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continueExp, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'continueExp.started')
        # update status
        continueExp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(continueExp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(continueExp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if continueExp.status == STARTED and not waitOnFlip:
        theseKeys = continueExp.getKeys(keyList=['y'], waitRelease=False)
        _continueExp_allKeys.extend(theseKeys)
        if len(_continueExp_allKeys):
            continueExp.keys = _continueExp_allKeys[-1].name  # just the last key pressed
            continueExp.rt = _continueExp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ExpIntructionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ExpIntruction" ---
for thisComponent in ExpIntructionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if continueExp.keys in ['', [], None]:  # No response was made
    continueExp.keys = None
thisExp.addData('continueExp.keys',continueExp.keys)
if continueExp.keys != None:  # we had a response
    thisExp.addData('continueExp.rt', continueExp.rt)
thisExp.nextEntry()
# the Routine "ExpIntruction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=44.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('pareidolia.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "trial" ---
    continueRoutine = True
    # update component parameters for each repeat
    expImg.setImage(stimuli_images)
    exp_resp.keys = []
    exp_resp.rt = []
    _exp_resp_allKeys = []
    # Run 'Begin Routine' code from expCode
    expResult = "Error"
    # keep track of which components have finished
    trialComponents = [fixation, expImg, exp_resp]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trial" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 3.5:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation* updates
        
        # if fixation is starting this frame...
        if fixation.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            fixation.frameNStart = frameN  # exact frame index
            fixation.tStart = t  # local t and not account for scr refresh
            fixation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fixation.started')
            # update status
            fixation.status = STARTED
            fixation.setAutoDraw(True)
        
        # if fixation is active this frame...
        if fixation.status == STARTED:
            # update params
            pass
        
        # if fixation is stopping this frame...
        if fixation.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixation.tStop = t  # not accounting for scr refresh
                fixation.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fixation.stopped')
                # update status
                fixation.status = FINISHED
                fixation.setAutoDraw(False)
        
        # *expImg* updates
        
        # if expImg is starting this frame...
        if expImg.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            expImg.frameNStart = frameN  # exact frame index
            expImg.tStart = t  # local t and not account for scr refresh
            expImg.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(expImg, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'expImg.started')
            # update status
            expImg.status = STARTED
            expImg.setAutoDraw(True)
        
        # if expImg is active this frame...
        if expImg.status == STARTED:
            # update params
            pass
        
        # if expImg is stopping this frame...
        if expImg.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > expImg.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                expImg.tStop = t  # not accounting for scr refresh
                expImg.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'expImg.stopped')
                # update status
                expImg.status = FINISHED
                expImg.setAutoDraw(False)
        
        # *exp_resp* updates
        waitOnFlip = False
        
        # if exp_resp is starting this frame...
        if exp_resp.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            exp_resp.frameNStart = frameN  # exact frame index
            exp_resp.tStart = t  # local t and not account for scr refresh
            exp_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(exp_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'exp_resp.started')
            # update status
            exp_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(exp_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(exp_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if exp_resp is stopping this frame...
        if exp_resp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > exp_resp.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                exp_resp.tStop = t  # not accounting for scr refresh
                exp_resp.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'exp_resp.stopped')
                # update status
                exp_resp.status = FINISHED
                exp_resp.status = FINISHED
        if exp_resp.status == STARTED and not waitOnFlip:
            theseKeys = exp_resp.getKeys(keyList=['y','n'], waitRelease=False)
            _exp_resp_allKeys.extend(theseKeys)
            if len(_exp_resp_allKeys):
                exp_resp.keys = _exp_resp_allKeys[-1].name  # just the last key pressed
                exp_resp.rt = _exp_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial" ---
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if exp_resp.keys in ['', [], None]:  # No response was made
        exp_resp.keys = None
    trials.addData('exp_resp.keys',exp_resp.keys)
    if exp_resp.keys != None:  # we had a response
        trials.addData('exp_resp.rt', exp_resp.rt)
    # Run 'End Routine' code from expCode
    if face == exp_resp.keys:
        expResult = "Correct"
    elif face != exp_resp.keys:
        expResult = "Wrong"
    else:
        expResult = "Input Error"
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-3.500000)
    
    # --- Prepare to start Routine "trialFeedback" ---
    continueRoutine = True
    # update component parameters for each repeat
    expFeedback.setText(expResult)
    # keep track of which components have finished
    trialFeedbackComponents = [expFeedback]
    for thisComponent in trialFeedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trialFeedback" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 1.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *expFeedback* updates
        
        # if expFeedback is starting this frame...
        if expFeedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            expFeedback.frameNStart = frameN  # exact frame index
            expFeedback.tStart = t  # local t and not account for scr refresh
            expFeedback.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(expFeedback, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'expFeedback.started')
            # update status
            expFeedback.status = STARTED
            expFeedback.setAutoDraw(True)
        
        # if expFeedback is active this frame...
        if expFeedback.status == STARTED:
            # update params
            pass
        
        # if expFeedback is stopping this frame...
        if expFeedback.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > expFeedback.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                expFeedback.tStop = t  # not accounting for scr refresh
                expFeedback.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'expFeedback.stopped')
                # update status
                expFeedback.status = FINISHED
                expFeedback.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialFeedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trialFeedback" ---
    for thisComponent in trialFeedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from code
    if trials.thisN == 59:
        trials.finished = True
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-1.000000)
    thisExp.nextEntry()
    
# completed 44.0 repeats of 'trials'


# --- Prepare to start Routine "GoodBye" ---
continueRoutine = True
# update component parameters for each repeat
goodbye_resp.keys = []
goodbye_resp.rt = []
_goodbye_resp_allKeys = []
# keep track of which components have finished
GoodByeComponents = [goodbye, goodbye_resp]
for thisComponent in GoodByeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "GoodBye" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *goodbye* updates
    
    # if goodbye is starting this frame...
    if goodbye.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        goodbye.frameNStart = frameN  # exact frame index
        goodbye.tStart = t  # local t and not account for scr refresh
        goodbye.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(goodbye, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'goodbye.started')
        # update status
        goodbye.status = STARTED
        goodbye.setAutoDraw(True)
    
    # if goodbye is active this frame...
    if goodbye.status == STARTED:
        # update params
        pass
    
    # *goodbye_resp* updates
    waitOnFlip = False
    
    # if goodbye_resp is starting this frame...
    if goodbye_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        goodbye_resp.frameNStart = frameN  # exact frame index
        goodbye_resp.tStart = t  # local t and not account for scr refresh
        goodbye_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(goodbye_resp, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'goodbye_resp.started')
        # update status
        goodbye_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(goodbye_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(goodbye_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if goodbye_resp.status == STARTED and not waitOnFlip:
        theseKeys = goodbye_resp.getKeys(keyList=['y'], waitRelease=False)
        _goodbye_resp_allKeys.extend(theseKeys)
        if len(_goodbye_resp_allKeys):
            goodbye_resp.keys = _goodbye_resp_allKeys[-1].name  # just the last key pressed
            goodbye_resp.rt = _goodbye_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GoodByeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "GoodBye" ---
for thisComponent in GoodByeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if goodbye_resp.keys in ['', [], None]:  # No response was made
    goodbye_resp.keys = None
thisExp.addData('goodbye_resp.keys',goodbye_resp.keys)
if goodbye_resp.keys != None:  # we had a response
    thisExp.addData('goodbye_resp.rt', goodbye_resp.rt)
thisExp.nextEntry()
# the Routine "GoodBye" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
