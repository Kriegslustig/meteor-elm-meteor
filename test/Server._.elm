module Meteor.Test.Server where

import Regex
import Graphics.Element exposing (show)
import ElmTest exposing (..)
import Console
import Task

import Meteor.Server

tests : Test
tests =
  suite "Check for all common Methods"
    [
    ]

port runner : Signal (Task.Task x ())
port runner =
  Console.run <| consoleRunner tests

main =
  show ""

