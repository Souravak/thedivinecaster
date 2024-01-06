import pyautogui as pg 
import time

time.sleep(5)
for i in range(275):
    pg.press('f2')
    pg.write(str(i+1))
    pg.press('enter')
    pg.press('right')
    time.sleep(2)