import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)

def turn_on():
  GPIO.output(18, GPIO.HIGH)

def turn_off():
  GPIO.output(18, GPIO.LOW)

if __name__ == '__main__':
  import sys

  action = sys.argv[1]

  if action == 'on':
    turn_on()
  elif action == 'off':
    turn_off()
  else:
    print('Invalid action')
