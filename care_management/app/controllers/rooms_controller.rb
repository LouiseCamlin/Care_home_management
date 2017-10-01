class RoomsController < ApplicationController

  def index
      rooms = Room.all
      render(
        json: rooms.to_json({
          only: [:beds, :id, :room_number],
          include: {
            resident_room: {
              only: [:id],
                include: {
                  resident: {
                    only: [:name]
                  }
                }
              }
            }
          }
        )
      )
    end

    def show
      room = Room.find(params[:id])
      render(
        json: room.to_json({
          only:[:beds, :id, :room_number],
          include: {
            resident_room: {
              only: [:id],
                include: {
                  resident: {
                    only: [:name]
                  }
                }
              }
            }
          }
        )
      )
    end

    def create
     room = Room.create( room_params )
     render json: room, status: :created
    end

    def update
      room = Room.find( params[:id] )
      if room.update_attributes(room_params)
        render json: room
      else
        render json: {status: :update_failed}
      end
    end
    #
    def destroy
      room = Room.find( params[:id])
      if room.destroy!
        render json: {status: :success}
      else
        render json: {status: :delete_failed}
      end
    end



    private
    def room_params
      params.require(:room).permit([:beds, :room_number])
    end

end
