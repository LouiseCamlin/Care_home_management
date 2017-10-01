class ResidentsController < ApplicationController

  def index
    residents = Resident.all
    render(
      json: residents.to_json({
        only: [:name, :id],
          include: {
            resident_room: {
              only: [:id],
                include: {
                  room: {
                    only: [:room_number]
                  }
                }
              }
            }
          }
        )
      )
  end

  def show
    resident = Resident.find(params[:id])
    render(
      json: resident.to_json({
        only:[:name, :id],
          include: {
            resident_room: {
              only: [:id],
                include: {
                  room: {
                    only: [:room_number]
                  }
                }
              }
            }
          }
        )
      )
  end

  def create
   resident = Resident.create( resident_params )
   render json: resident, status: :created
  end

  def update
    resident = Resident.find( params[:id] )
    if resident.update_attributes(resident_params)
      render json: resident
    else
      render json: {status: :update_failed}
    end
  end

  def destroy
    resident = Resident.find( params[:id])
    if resident.destroy!
      render json: {status: :success}
    else
      render json: {status: :delete_failed}
    end
  end



  private
  def resident_params
    params.require(:resident).permit([:name])
  end


end
