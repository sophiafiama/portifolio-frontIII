import React from 'react'

export default function Card({img, title, description}) {
    return (
        <>

            <div class="col">
                <div class="card h-100">
                    <img src={img} class="card-img-top" alt={title}></img>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                    {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div> */}
                </div>
            </div>

        </>
    )
}
