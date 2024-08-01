#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <ctype.h>

char board[3][3];
const char PLAYER = 'X';
const char COMPUTER = 'O';

void reset();
void printBoard();
int checkFreeSpaces();
void playerMove();
void computerMove();
char checkWin();
void printWinner(char winner1);

int main()
{
          char winner = ' ';
          // reset board
          reset();
          // print board
          printBoard();
          // while no winner
          while (winner == ' ' && checkFreeSpaces() != 0)
          {
                    printBoard();
                    playerMove();
                    winner = checkWin();
                    if (winner != ' ' || checkFreeSpaces() == 0)
                    {
                              break;
                    }
                    computerMove();
                    winner = checkWin();
                    if (winner != ' ' || checkFreeSpaces() == 0)
                    {
                              break;
                    }
          }
          printBoard();
          printWinner(winner);
          return 0;
}

void reset()
{
          for (int i = 0; i < 3; i++)
          {
                    for (int j = 0; j < 3; j++)
                    {
                              board[i][j] = ' ';
                    }
          }
}

void printBoard()
{
          printf(" %c | %c | %c\n", board[0][0], board[0][1], board[0][2]);
          printf("---|---|---\n");
          printf(" %c | %c | %c\n", board[1][0], board[1][1], board[1][2]);
          printf("---|---|---\n");
          printf(" %c | %c | %c\n", board[2][0], board[2][1], board[2][2]);
}

int checkFreeSpaces()
{
          int freeSpaces = 9;
          for (int i = 0; i < 3; i++)
          {
                    for (int j = 0; j < 3; j++)
                    {
                              if (board[i][j] != ' ')
                              {
                                        freeSpaces--;
                              }
                    }
          }
          return freeSpaces;
}

void playerMove()
{
          int X, Y;

          do
          {
                    printf("Enter Row Number: ");
                    scanf("%d", &X);
                    X--;
                    printf("Enter Column Number: ");
                    scanf("%d", &Y);
                    Y--;

                    if (board[X][Y] == ' ')
                    {
                              board[X][Y] = PLAYER;
                              break;
                    }
                    else
                    {
                              printf("Invalid Move\n");
                    }
          } while (board[X][Y] != ' ');
}

void computerMove()
{
          srand(time(0));
          int X, Y;
          if (checkFreeSpaces() == 0)
          {
                    printWinner(' ');
          }
          do
          {
                    X = rand() % 3;
                    Y = rand() % 3;
                    if (board[X][Y] == ' ')
                    {
                              board[X][Y] = COMPUTER;
                              break;
                    }
          } while (board[X][Y] != ' ');
}

char checkWin()
{
          for (int i = 0; i < 3; i++)
          {
                    if (board[i][0] == board[i][1] && board[i][1] == board[i][2])
                    {
                              return board[i][0];
                    }
          }

          for (int i = 0; i < 3; i++)
          {
                    if (board[0][i] == board[1][i] && board[1][i] == board[2][i])
                    {
                              return board[0][i];
                    }
          }

          if (board[0][0] == board[1][1] && board[1][1] == board[2][2])
          {
                    return board[0][0];
          }

          if (board[0][2] == board[1][1] && board[1][1] == board[2][0])
          {
                    return board[0][2];
          }

          return ' ';
}

void printWinner(char winner)
{
          if (winner == PLAYER)
          {
                    printf("==================");
                    printf("Player Wins\n");
                    printf("==================");
          }
          else if (winner == COMPUTER)
          {
                    printf("==================");
                    printf("Computer Wins\n");
                    printf("==================");
          }
          else
          {
                    printf("==================");
                    printf("It's a Draw\n");
                    printf("==================");
          }
}