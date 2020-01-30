'use strict';

module.exports = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAYAAADtt+XCAAAABmJLR0QA/wD/AP+gvaeTAAAMlElEQVR4nO3dbU9Ud7vG4WsGBhhAAQF5rok2bb//l2nSViy9eQYBGQR0GNZ+4Zbd3rXdcgn81wzH8cqYGM4Eh18W66lRVVUVAHBLzdIDAOhPAgJAioAAkCIgAKQICAApAgJAioAAkCIgAKQICAApAgJAioAAkCIgAKQICAApAgJAynDpAfCQrq+v4+DgIK6urqLRaMTntxk0Go1oNBoREXFxcfHFf9tut+NLbz+oqiqazWbMz8/H8LCPFI+H/+0MpL29vej1ehERf4nE0NBQzM3NxdDQ0J1+vaqqbsL056/ZbDZjeHg45ufn7/TrQR00vFCKfvf27du4uLiIZvPTb2Srqornz59Hq9UqvOyTq6urODg4+MvfjYyMxOzsbKFFcDcEhL5zeHgYp6enMTY2Fu12O9rtdoyNjZWedStXV1fR6XTi4uIiLi8v4+nTpzE3N1d6FtyKgFB7VVXF3t5eXF9fR0TE7OxsjI6OFl51t87Pz+Pk5CTOzs5icnIyFhcXb46ooK4EhFrq9Xqxt7cXEZ/OXSwuLt6c5B5k29vbsby8HDs7OzfBXFpaEhNqyUl0amV/fz+urq6i1+vF2tpa6TnFLC0t3fz55OQkzs/Po6qqWFlZKbgK/kpAKO7jx49xeHgYl5eXsbS0FO12u/SkWpmeno7p6enodruxubkZERFzc3N9d96HwSMgFHN8fBzv37+P8fHxWF5eLj2n9lqtVqyurkbEpwsJDg8Po91uu5qLYgSEB7e3txfv37+P+fn5mx+I3M7nK7bOz89jfX09RkdH/XqLB+ckOg9mZ2cnrq6uYmFhIUZGRkrPqaXPJ9Fvq9vtxu7ubrRarVhcXLyHZfB3jkC4dycnJ1FVlUd93KNWqxVra2txfX0d29vbTrjzIHyauTedTieurq5ifHx84O7bqKtmsxnLy8s3J9ydI+E+ubicO3d2dhabm5vRbDZjZmZGPAr4fMJ9cnIytre34/T0tPQkBpCAcGeqqoo//vgjPnz4EKurqzExMVF60qM3Ojoay8vL0ev1YmNj4+bmRLgLfoXFnTg9PY1OpxNra2uP4o7xfjMzMxMzMzOxtbUVQ0NDTrRzJxyB8E0uLy9jfX09ms1mrKysiEfNraysxNTU1M2RInwLRyCkHRwcRK/Xi5cvX5aewi202+347rvvYm9vL6qqcjRCmiMQbq2qqtje3o52u+2HTx9bWFiI6enp2NjYuHkRFtyGgHArJycn8euvv8by8nJMTk6WnsM3GhsbixcvXsTu7m4cHx+XnkOfERC+2tbWVkRE/PDDD4WXcNdWV1ej0WjcfI/hawgI/6+qquLo6CieP38e09PTpedwT6anp2NhYSHW19ej2+2WnkMfEBD+1cXFRfzyyy/x7Nmz2rxjnPszPDwcL1++jN3d3eh0OqXnUHMCwj86Pj6Od+/exY8//lh6Cg9sbW0tLi8v4/DwsPQUakxA+KKNjY2bV8nyOM3Pz8fIyEhsb2+XnkJNCQh/s7m5Gd1u1/kO4unTpzeX+sJ/ExD+YmNjI+bn52N8fLz0FGpifHw8VldX4+effy49hZoRECLi05VWGxsbsbKy4um5/M3Q0FD89NNP8fr16/AOOj4TEOL6+jrevHkTL1688MIn/lGj0YiXL1/GmzdvPNWXiBCQR6+qqlhfX/c8K77K54j8/vvvIoKAPGZVVcXr16/j+++/Lz2FPuNIhAgBedS2trbi1atXpWfQp169ehVv3rwpPYOCBOSRevPmjfd38M1evnwZ//nPf0rPoBABeYQ2Nze9OZA78flm099++630FAoQkEdmd3c35ubmXG3FnWm1WrG6uuqO9UdIQB6Rt2/fxsTERIyNjZWewoAZGxuLiYmJ2NvbKz2FByQgj8S7d++i0WjEkydPSk9hQE1NTcXIyEicnp6WnsIDEZBHoNvtxvn5eTx79qz0FAbczMxMnJ2dxcePH0tP4QEIyCOwtbUVS0tLpWfwSCwvLzsf8kgIyIBbX1+PtbW10jP4SgsLC6Un3InvvvvO63EfAQEZYAcHB7GwsBBDQ0Olp/CVBuV71Ww2Y2pqygupBpyADKjLy8u4urqKiYmJ0lN4pCYnJ6Pb7cbFxUXpKdwTARlQe3t7zntQ3NLSkkt7B5iADKC9vb1YXl4uPQMiImJlZcX5kAElIAOm0+lEq9WKVqtVegpExKc71cfGxqLT6ZSewh0TkAFzfHzsfg9qZ3Z2No6OjkrP4I4JyADZ3t72qytqa2VlJTY3N0vP4A4JyIC4vLyMoaEhD0mktoaHh2N0dDQuLy9LT+GOCMiA2N/fH5ib0Bhc8/PzcXBwUHoGd0RABsDBwUHMz8+XngFfZW5uLk5OTkrP4A4IyAC4vLyMdrtdegZ8lXa77YqsASEgfW5ra8uJc/rOyspK7O7ulp7BNxKQPtbr9aLRaAzM85N4PJrNZlRVFVdXV6Wn8A0EpI85+qCfLS0tOQrpcwLSp7rdrvMe9L3R0VEvn+pjAtKn9vf3XXlF35ufn/ewxT4mIH2o2+1Gs+lbx2AYGxtzFNKn/BTqQx7VziBxFNK/BKTP9Ho9V10xcJrNZlxfX5eewS0JSJ/Z2dl5kKOPmZmZe/8a8NnKykrs7OyUnsEtCQhf5AovHlpVVaUncEsC0kc884pBtri46FxInxGQPvLhw4cYHR0tPQPuxfDwcHS73dIzuAUB6RPv37+PycnJ0jPgXk1MTMT5+XnpGXwlAekTJycnMT09XXoG3KuZmZk4Pj4uPYOvJCBArTQajdIT+EoC0geOjo7i2bNnpWfAg5idnY2jo6PSM/gKAtIHLi4uXFbLo+G96f1DQIDacU9If2hUvlO1tru7G3NzczE8PFx6CjyYXq8XR0dH7nuqOUcgNXd9fS0ePDpDQ0PuCekDAgJAioDU2Lt372Jqaqr0DChiZmYmTk5OSs/gXwhIjb1//z4mJiZKz4Ai2u12XFxclJ7BvxCQGnNDFVBnAlJjXlvLY3d9fe2S3hrzE6qm9vf3Y3Z2tvQMKGppaSl2d3dLz+AfCEhN9Xo9l+/y6HnVbb0JSE05bAfqTkBqSkCAuhOQGnL5Lvyfp0+fxunpaekZfIGA1NDx8bGXR8H/evLkSZydnZWewRcICAApAgLUnnOC9SQgNeQOdPgrn4l6EpAa8mEB+oGA1Eyn04mnT5+WngG1MjU15cm8NSQgNdPpdGJycrL0DKiViYmJOD8/Lz2D/yIgAKQICAApAgJAioAAkCIgAKQICAApAgJAioAAkCIgAKQICAApAlIjVVV5kCL8g2azGdfX16Vn8CcCUiMfP36M0dHR0jOglkZGRuLjx4+lZ/AnAlIj3W43Wq1W6RlQS61WK7rdbukZ/ImA1Ii3rgH9REAASBEQAFIEBIAUAQEgRUAASBEQAFIEBIAUAQEgRUAASBEQAFIEBIAUAQEgRUAASBEQAFIEBIAUAQEgRUAASBEQAFIEBIAUAQEgRUAASBEQAFIEBIAUAQEgRUAASBEQAFIEBIAUAQEgRUAASBEQAFIEBIAUAQEgRUAASGlUVVWVHgFA/3EEAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkCKgACQIiAApAgIACkCAkDK/wDrxQT5DEdc5wAAAABJRU5ErkJggg==';
