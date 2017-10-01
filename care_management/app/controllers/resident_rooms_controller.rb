class ResidentRoomsController < ApplicationController

  def index
   occupied = ResidentRoom.all
   render(
     json: occupied.to_json({
       only: [:id],
        include: [{
          room:{
            only: [:room_number]
          }
        },
        resident: {
          only: [:name]
        }]
        }
     )
   )
 end

 def show
   occupied = ResidentRoom.find(params[:id])
   render(
    json: occupied.to_json({
      only: [:id],
        include: [{
          room:{
            only: [:room_number]
          }
        },
          resident: {
            only: [:name]
            }]
          }
        )
      )
  end


  def create
   new_occupant = ResidentRoom.create( occupant_params )
   render json: new_occupant, status: :created
  end

  def update
    occupant = ResidentRoom.find( params[:id] )
    if occupant.update_attributes(occupant_params)
      render json: occupant
    else
      render json: {status: :update_failed}
    end
  end

  def destroy
    occupant = ResidentRoom.find( params[:id])
    if occupant.destroy!
      render json: {status: :success}
    else
      render json: {status: :delete_failed}
    end
  end


  private
  def occupant_params
    params.require(:resident_room).permit(:room_id, :resident_id)
  end

end
