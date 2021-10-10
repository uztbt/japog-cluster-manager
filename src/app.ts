import express, { Request, Response, NextFunction } from 'express';

export class App {
  app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.route('/games')
      .get(this.getGameOverviews)
      .post(joinGameRoom);
  }

  private getGameOverviews(request: Request, response: Response, next: NextFunction) {
    response.status(200).json([
      {
        "status": "IN_GAME",
        "player0": "Kevin",
        "player1": "Eric",
        "scores": [
          2,
          1
        ]
      }
    ])
  }

  listen(port: number, completion: () => void) {
    this.app.listen(port)
    completion();
  }
}

type JoinGameRoomRequest = {
  region: string,
  roomNo: number
};

function joinGameRoom(request: Request, response: Response, next: NextFunction) {
  try {
    const joinGameRoomRequest: JoinGameRoomRequest = request.body;
    response.status(200).send(joinGameRoomRequest);
  } catch(e) {
    response.status(500).send(e);
  }
}