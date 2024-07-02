function highlightRoute(routeNumber) {
    var mapFrame = document.getElementById('map-frame');
    var infoContainer = document.getElementById('info-container');

    switch (routeNumber) {
        case 602:
            mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d107093.03720527864!2d-71.66019109594468!3d-32.98643919603732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9689c337807a98df%3A0x690a7f495c149ad6!2sQuintero%20%2F%20Norte%2C%20Las%20Ramaditas%2C%20Quintero%2C%20Valpara%C3%ADso!3m2!1d-32.919103899999996!2d-71.50399999999999!4m5!1s0x9689e14c969568eb%3A0xda14f1b2bf562fd8!2sCapilla%20Nuestra%20Se%C3%B1ora%20Del%20Mar%2C%202361142%20Valpara%C3%ADso!3m2!1d-33.040859399999995!2d-71.6505626!5e0!3m2!1ses-419!2scl!4v1719799819349!5m2!1ses-419!2scl'; // Añade el enlace correspondiente para la línea 602
            infoContainer.innerHTML = `
            <h3>Horarios de 602 de autobús</h3>
            <p>la línea 602 tiene 85 paradas y la duración total del viaje para esta ruta es de aproximadamente 58 minutos.</p>
            <table>
                <tr>
                    <th>Día</th>
                    <th>Horarios de operación</th>
                    <th>Frecuencia (min)</th>
                </tr>
                <tr>
                    <td>lun.</td>
                    <td>06:00 - 22:00</td>
                    <td>3 - 5</td>
                </tr>
                <tr>
                    <td>mar.</td>
                    <td>06:00 - 22:00</td>
                    <td>3 - 5</td>
                </tr>
                <tr>
                    <td>mié.</td>
                    <td>06:00 - 22:00</td>
                    <td>3 - 5</td>
                </tr>
                <tr>
                    <td>jue.</td>
                    <td>06:00 - 22:00</td>
                    <td>3 - 5</td>
                </tr>
                <tr>
                    <td>vie.</td>
                    <td>06:00 - 22:00</td>
                    <td>3 - 5</td>
                </tr>
                <tr>
                    <td>sáb.</td>
                    <td>07:00 - 22:00</td>
                    <td>3 - 5</td>
                </tr>
                <tr>
                    <td>dom.</td>
                    <td>07:00 - 22:00</td>
                    <td>4 - 5</td>
                </tr>
            </table>
            <p>La línea 602 tiene 85 paradas y la duración total del viaje para esta ruta es de aproximadamente 58 minutos.</p>
        `;
            break;
        case 603:
            mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31823.754233648615!2d-71.61634434814565!3d-33.02854688222114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9689ddad3b0cb0b7%3A0x7b2a356b3e5264af!2sAlejandro%20Navarrete%203276%20%2F%20Sur!3m2!1d-32.9857802!2d-71.525933!4m5!1s0x9689e13c1781f819%3A0x6fb001391ec172e!2sCarlos%20Pezoa%20Veliz%20%2F%20Joaquin%20Venegas%2C%20Valpara%C3%ADso!3m2!1d-33.0546767!2d-71.6369048!5e0!3m2!1ses-419!2scl!4v1719798906280!5m2!1ses-419!2scl';
            infoContainer.innerHTML = `
                <h3>Horarios de 603 de autobús</h3>
                <p>La ruta de autobús 603 opera todos los días. El horario regular es: 06:00 - 22:00</p>
                <table>
                    <tr>
                        <th>Día</th>
                        <th>Horarios de operación</th>
                        <th>Frecuencia (min)</th>
                    </tr>
                    <tr>
                        <td>lun.</td>
                        <td>06:00 - 22:00</td>
                        <td>4 - 5</td>
                    </tr>
                    <tr>
                        <td>mar.</td>
                        <td>06:00 - 22:00</td>
                        <td>4 - 5</td>
                    </tr>
                    <tr>
                        <td>mié.</td>
                        <td>06:00 - 22:00</td>
                        <td>4 - 5</td>
                    </tr>
                    <tr>
                        <td>jue.</td>
                        <td>06:00 - 22:00</td>
                        <td>4 - 5</td>
                    </tr>
                    <tr>
                        <td>vie.</td>
                        <td>06:00 - 22:00</td>
                        <td>4 - 5</td>
                    </tr>
                    <tr>
                        <td>sáb.</td>
                        <td>06:00 - 22:00</td>
                        <td>4 - 5</td>
                    </tr>
                    <tr>
                        <td>dom.</td>
                        <td>07:00 - 22:00</td>
                        <td>5 - 9</td>
                    </tr>
                </table>
                <p>La línea 603 tiene 91 paradas y la duración total del viaje para esta ruta es de aproximadamente 69 minutos.</p>
            `;
            break;
            case 606:
                mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d53527.2812749646!2d-71.62355557598583!3d-33.01813916193132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9689e11114c7e6ed%3A0xdbb49c340f75a5a!2sGarita%20Camino%20La%20Polvora%2C%20Valpara%C3%ADso!3m2!1d-33.0658483!2d-71.63613769999999!4m5!1s0x9689dc37b67dc287%3A0x2536e98121b6f9ed!2zR29tZXogQ2FycmXDsW8gLyBFc3ZhbCwgVmnDsWEgZGVsIE1hciwgVmFscGFyYcOtc28!3m2!1d-32.9984955!2d-71.5156145!5e0!3m2!1ses-419!2scl!4v1719800';
                infoContainer.innerHTML = `
                <h3>Horarios de 606 de autobús</h3>
                <p>la línea 606 tiene 98 paradas y la duración total del viaje para esta ruta es de aproximadamente 64 minutos.</p>
                <table>
                    <tr>
                        <th>Día</th>
                        <th>Horarios de operación</th>
                        <th>Frecuencia (min)</th>
                    </tr>
                    <tr>
                        <td>lun.</td>
                        <td>06:00 - 22:00</td>
                        <td>3 - 5</td>
                    </tr>
                    <tr>
                        <td>mar.</td>
                        <td>06:00 - 22:00</td>
                        <td>3 - 5</td>
                    </tr>
                    <tr>
                        <td>mié.</td>
                        <td>06:00 - 22:00</td>
                        <td>3 - 5</td>
                    </tr>
                    <tr>
                        <td>jue.</td>
                        <td>06:00 - 22:00</td>
                        <td>3 - 5</td>
                    </tr>
                    <tr>
                        <td>vie.</td>
                        <td>06:00 - 22:00</td>
                        <td>3 - 5</td>
                    </tr>
                    <tr>
                        <td>sáb.</td>
                        <td>07:00 - 22:00</td>
                        <td>3 - 5</td>
                    </tr>
                    <tr>
                        <td>dom.</td>
                        <td>07:00 - 22:00</td>
                        <td>4 - 5</td>
                    </tr>
                </table>
                <p>la línea 606 tiene 98 paradas y la duración total del viaje para esta ruta es de aproximadamente 64 minutos.</p>
            `;
                break;
        case 605:
                mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d107084.49973491215!2d-71.63073589566126!3d-32.993475704555216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9689e11114c7e6ed%3A0xdbb49c340f75a5a!2sGarita%20Camino%20La%20Polvora%2C%20Valpara%C3%ADso!3m2!1d-33.0658483!2d-71.63613769999999!4m5!1s0x9689db1508f8651d%3A0xa8bdd3939f8dc42d!2zRiAtIDUyOGMsIENvbmPDs24sIFZhbHBhcmHDrXNv!3m2!1d-32.9454859!2d-71.4509041!5e0!3m2!1ses-419!2scl!4v1719800374497!5m2!1ses-419!2scl';
                infoContainer.innerHTML = `
                <h3>Horarios de 605 de autobús</h3>
                <p>la línea 605 tiene 115 paradas y la duración total del viaje para esta ruta es de aproximadamente 69 minutos.</p>
                <table>
                    <tr>
                        <th>Día</th>
                        <th>Horarios de operación</th>
                        <th>Frecuencia (min)</th>
                    </tr>
                    <tr>
                        <td>lun.</td>
                        <td>06:00 - 22:00</td>
                        <td>6 - 15</td>
                    </tr>
                    <tr>
                        <td>mar.</td>
                        <td>06:00 - 22:00</td>
                        <td>6 - 15</td>
                    </tr>
                    <tr>
                        <td>mié.</td>
                        <td>06:00 - 22:00</td>
                        <td>6 - 15  </td>
                    </tr>
                    <tr>
                        <td>jue.</td>
                        <td>06:00 - 22:00</td>
                        <td>6 - 15</td>
                    </tr>
                    <tr>
                        <td>vie.</td>
                        <td>06:00 - 22:00</td>
                        <td>6 - 15</td>
                    </tr>
                    <tr>
                        <td>sáb.</td>
                        <td>06:00 - 22:00</td>
                        <td>8 - 15</td>
                    </tr>
                    <tr>
                        <td>dom.</td>
                        <td>07:00 - 21:00</td>
                        <td>10 - 15</td>
                    </tr>
                </table>
                <p>la línea 605 tiene 115 paradas y la duración total del viaje para esta ruta es de aproximadamente 69 minutos.</p>
            `;
                break;
                case 510:
                    mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d26754.94446555706!2d-71.62145490149136!3d-33.046775684238895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9689e6b18375500f%3A0x3bce673af36f0718!2sCalle%20Diecinueve%20-%20Pje%20Uno%2C%20Valpara%C3%ADso!3m2!1d-33.033636099999995!2d-71.6527835!4m5!1s0x9689de2fb5f66ac5%3A0x64b9617143349bf!2sSubida%20Tiwe%2C%20Valpara%C3%ADso!3m2!1d-33.0608356!2d-71.5620157!5e0!3m2!1ses-419!2scl!4v1719800915796!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
                    infoContainer.innerHTML = `
                    <h3>Horarios de 510 de autobús</h3>
                    <p>la línea 510 tiene 59 paradas y la duración total del viaje para esta ruta es de aproximadamente 31 minutos.</p>
                    <table>
                        <tr>
                            <th>Día</th>
                            <th>Horarios de operación</th>
                            <th>Frecuencia (min)</th>
                        </tr>
                        <tr>
                            <td>lun.</td>
                            <td>06:00 - 22:00</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>mar.</td>
                            <td>06:00 - 22:00</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>mié.</td>
                            <td>06:00 - 22:00</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>jue.</td>
                            <td>06:00 - 22:00</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>vie.</td>
                            <td>06:00 - 22:00</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>sáb.</td>
                            <td>06:00 - 22:00</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>dom.</td>
                            <td>07:00 - 21:00</td>
                            <td>8</td>
                        </tr>
                    </table>
                    <p>la línea 510 tiene 59 paradas y la duración total del viaje para esta ruta es de aproximadamente 31 minutos.</p>
                `;
                    break;
                    case 522:
                        mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d26755.424249827774!2d-71.62929481368424!3d-33.04519632658186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9689e6b7973400c1%3A0xdd326ce40c87ebaa!2sCementerio%20N%C2%B0%203%20de%20Valpara%C3%ADso%20-%20Cementerio%2C%20Valpara%C3%ADso!3m2!1d-33.0271764!2d-71.6458829!4m5!1s0x9689de29ee5796f9%3A0xba1ca196d012dfda!2sRodelillo%20-%20Luis%20Bahamondes%2C%20Valpara%C3%ADso!3m2!1d-33.0644255!2d-71.5714267!5e0!3m2!1ses-419!2scl!4v1719801052778!5m2!1ses-419!2scl';
                        infoContainer.innerHTML = `
                            <h3>Horarios de 522 de autobús</h3>
                            <p>La ruta de autobús 522 opera todos los días. El horario regular es: 06:00 - 22:00</p>
                            <table>
                                <tr>
                                    <th>Día</th>
                                    <th>Horarios de operación</th>
                                    <th>Frecuencia (min)</th>
                                </tr>
                                <tr>
                                    <td>lun.</td>
                                    <td>06:00 - 22:00</td>
                                    <td>10 - 15</td>
                                </tr>
                                <tr>
                                    <td>mar.</td>
                                    <td>06:00 - 22:00</td>
                                    <td>10 - 15</td>
                                </tr>
                                <tr>
                                    <td>mié.</td>
                                    <td>06:00 - 22:00</td>
                                    <td>10 - 15</td>
                                </tr>
                                <tr>
                                    <td>jue.</td>
                                    <td>06:00 - 22:00</td>
                                    <td>10 - 15</td>
                                </tr>
                                <tr>
                                    <td>vie.</td>
                                    <td>06:00 - 22:00</td>
                                    <td>10 - 15</td>
                                </tr>
                                <tr>
                                    <td>sáb.</td>
                                    <td>08:00 - 22:00</td>
                                    <td>10 - 15</td>
                                </tr>
                                <tr>
                                    <td>dom.</td>
                                    <td>08:00 - 21:00</td>
                                    <td>20</td>
                                </tr>
                            </table>
                            <p>La línea 522 tiene 41 paradas y la duración total del viaje para esta ruta es de aproximadamente 28 minutos.</p>
                        `;
                        break;
                        case 518:
                            mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d26755.424249827774!2d-71.62929481368424!3d-33.04519632658186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9689e6b7973400c1%3A0xdd326ce40c87ebaa!2sCementerio%20N%C2%B0%203%20de%20Valpara%C3%ADso%20-%20Cementerio%2C%20Valpara%C3%ADso!3m2!1d-33.0271764!2d-71.6458829!4m5!1s0x9689de29ee5796f9%3A0xba1ca196d012dfda!2sRodelillo%20-%20Luis%20Bahamondes%2C%20Valpara%C3%ADso!3m2!1d-33.0644255!2d-71.5714267!5e0!3m2!1ses-419!2scl!4v1719801344756!5m2!1ses-419!2scl';
                            infoContainer.innerHTML = `
                                <h3>Horarios de 518 de Micro</h3>
                                <p>La ruta de Micro 518 opera todos los días. El horario regular es: 24 horas</p>
                                <table>
                                    <tr>
                                        <th>Día</th>
                                        <th>Horarios de operación</th>
                                        <th>Frecuencia (min)</th>
                                    </tr>
                                    <tr>
                                        <td>lun.</td>
                                        <td>24 horas</td>
                                        <td>6 - 20</td>
                                    </tr>
                                    <tr>
                                        <td>mar.</td>
                                        <td>24 horas</td>
                                        <td>6 - 20</td>
                                    </tr>
                                    <tr>
                                        <td>mié.</td>
                                        <td>24 horas</td>
                                        <td>6 - 20</td>
                                    </tr>
                                    <tr>
                                        <td>jue.</td>
                                        <td>24 horas</td>
                                        <td>6 - 20</td>
                                    </tr>
                                    <tr>
                                        <td>vie.</td>
                                        <td>24 horas</td>
                                        <td>6 - 20</td>
                                    </tr>
                                    <tr>
                                        <td>sáb.</td>
                                        <td>24 horas</td>
                                        <td>11 - 20</td>
                                    </tr>
                                    <tr>
                                        <td>dom.</td>
                                        <td>24 horas</td>
                                        <td>15 - 27</td>
                                    </tr>
                                </table>
                                <p>La línea 518 tiene 68 paradas y la duración total del viaje para esta ruta es de aproximadamente 91 minutos.</p>
                            `;
                            break;
                            case 501:
                                mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d53509.91387383818!2d-71.64636252934619!3d-33.04673463175773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9689e1440c6ab3c9%3A0xd586293aab009694!2sLuis%20Emilio%20Recabarren%20Oriente%2C%202361515%20Valpara%C3%ADso!3m2!1d-33.0551629!2d-71.65074229999999!4m5!1s0x9689e09e0897e069%3A0x40904e33ed5193e1!2sCabriteria%20678%2C%20Valpara%C3%ADso!3m2!1d-33.0544138!2d-71.573189!5e0!3m2!1ses-419!2scl!4v1719800903194!5m2!1ses-419!2scl';
                                infoContainer.innerHTML = `
                                    <h3>Horarios de 501 de autobús</h3>
                                    <p>La ruta de autobús 501 opera todos los días. El horario regular es: 06:00 - 22:00</p>
                                    <table>
                                        <tr>
                                            <th>Día</th>
                                            <th>Horarios de operación</th>
                                            <th>Frecuencia (min)</th>
                                        </tr>
                                        <tr>
                                            <td>lun.</td>
                                            <td>06:00 - 22:00</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>mar.</td>
                                            <td>06:00 - 22:00</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>mié.</td>
                                            <td>06:00 - 22:00</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>jue.</td>
                                            <td>06:00 - 22:00</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>vie.</td>
                                            <td>06:00 - 22:00</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>sáb.</td>
                                            <td>06:00 - 22:00</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>dom.</td>
                                            <td>07:00 - 22:00</td>
                                            <td>6</td>
                                        </tr>
                                    </table>
                                    <p>La línea 501 tiene 68 paradas y la duración total del viaje para esta ruta es de aproximadamente 27 minutos</p>
                                `;
                                break;
                                case 505:
                                    mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d53513.143310198866!2d-71.62611674351587!3d-33.04141901740733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x9689e19b02d22f03%3A0x46cd87676862ca5a!2sMirador%20Cerro%20Esperanza%2C%202372026%20Valpara%C3%ADso!3m2!1d-33.0314201!2d-71.5882424!4m5!1s0x9689e6b4c9562c67%3A0x9d89bdd34fec1a20!2sPorvenir%2C%20Valpara%C3%ADso!3m2!1d-33.038676599999995!2d-71.6484933!5e0!3m2!1ses-419!2scl!4v1719801079685!5m2!1ses-419!2scl';
                                    infoContainer.innerHTML = `
                                        <h3>Horarios de 505 de autobús</h3>
                                        <p>La ruta de autobús 505 opera todos los días. El horario regular es: 06:00 - 22:00</p>
                                        <table>
                                            <tr>
                                                <th>Día</th>
                                                <th>Horarios de operación</th>
                                                <th>Frecuencia (min)</th>
                                            </tr>
                                            <tr>
                                                <td>lun.</td>
                                                <td>06:00 - 22:00</td>
                                                <td>4 - 8</td>
                                            </tr>
                                            <tr>
                                                <td>mar.</td>
                                                <td>06:00 - 22:00</td>
                                                <td>4 - 8</td>
                                            </tr>
                                            <tr>
                                                <td>mié.</td>
                                                <td>06:00 - 22:00</td>
                                                <td>4 - 8</td>
                                            </tr>
                                            <tr>
                                                <td>jue.</td>
                                                <td>06:00 - 22:00</td>
                                                <td>4 - 8</td>
                                            </tr>
                                            <tr>
                                                <td>vie.</td>
                                                <td>06:00 - 22:00</td>
                                                <td>4 - 8</td>
                                            </tr>
                                            <tr>
                                                <td>sáb.</td>
                                                <td>06:00 - 22:00</td>
                                                <td>8 - 12</td>
                                            </tr>
                                            <tr>
                                                <td>dom.</td>
                                                <td>08:00 - 21:00</td>
                                                <td>10</td>
                                            </tr>
                                        </table>
                                        <p>La línea 505 tiene 85 paradas y la duración total del viaje para esta ruta es de aproximadamente 55 minutos.</p>
                                    `;
                                    break;
                                    case 703:
                                        mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d37834.760768885535!2d-71.61113474010719!3d-33.05246522126611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e3!4m5!1s0x9689e6c8458148f5%3A0xf857f092d8427fc!2sLautaro%20262%2C%20Valpara%C3%ADso!3m2!1d-33.0290356!2d-71.6415839!4m3!3m2!1d-33.0659274!2d-71.5810955!5e0!3m2!1ses-419!2scl!4v1719801842396!5m2!1ses-419!2scl';
                                        infoContainer.innerHTML = `
                                                <h3>Horarios de 703 de autobús</h3>
                                                <p>La ruta de autobús 703 opera todos los días. El horario regular es: 06:10 - 22:00</p>
                                                <table>
                                                    <tr>
                                                        <th>Día</th>
                                                        <th>Horarios de operación</th>
                                                        <th>Frecuencia (min)</th>
                                                    </tr>
                                                    <tr>
                                                        <td>lun.</td>
                                                        <td>06:10 - 22:00</td>
                                                        <td>5 - 8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>mar.</td>
                                                        <td>06:10 - 22:00</td>
                                                        <td>5 - 8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>mié.</td>
                                                        <td>06:10 - 22:00</td>
                                                        <td>5 - 8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>jue.</td>
                                                        <td>06:10 - 22:00</td>
                                                        <td>5 - 8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>vie.</td>
                                                        <td>06:10 - 22:00</td>
                                                        <td>5 - 8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>sáb.</td>
                                                        <td>06:30 - 22:00</td>
                                                        <td>8 - 12</td>
                                                    </tr>
                                                    <tr>
                                                        <td>dom.</td>
                                                        <td>07:30 - 21:00</td>
                                                        <td>10 - 12</td>
                                                    </tr>
                                                </table>
                                                <p>La línea 703 tiene varias paradas y la duración total del viaje para esta ruta es de aproximadamente 60 minutos.</p>
                                            `;
                                        break;
                            
                                    case 109:
                                        mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d44989.82522708226!2d-71.4402603225702!3d-33.059395172307575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e3!4m3!3m2!1d-33.026323!2d-71.6432956!4m3!3m2!1d-33.0633844!2d-71.3934637!5e0!3m2!1ses-419!2scl!4v1719800060135!5m2!1ses-419!2scl';
                                        infoContainer.innerHTML = `
                                            <h3>Horarios de 109 de autobús</h3>
                                            <p>La ruta de autobús 109 opera todos los días. El horario regular es: 06:00 - 21:00</p>
                                            <table>
                                                <tr>
                                                    <th>Día</th>
                                                    <th>Horarios de operación</th>
                                                    <th>Frecuencia (min)</th>
                                                </tr>
                                                <tr>
                                                    <td>lun.</td>
                                                    <td>06:00 - 21:00</td>
                                                    <td>8 - 15</td>
                                                </tr>
                                                <tr>
                                                    <td>mar.</td>
                                                    <td>06:00 - 21:00</td>
                                                    <td>8 - 15</td>
                                                </tr>
                                                <tr>
                                                    <td>mié.</td>
                                                    <td>06:00 - 21:00</td>
                                                    <td>8 - 15</td>
                                                </tr>
                                                <tr>
                                                    <td>jue.</td>
                                                    <td>06:00 - 21:00</td>
                                                    <td>8 - 15</td>
                                                </tr>
                                                <tr>
                                                    <td>vie.</td>
                                                    <td>06:00 - 21:00</td>
                                                    <td>8 - 15</td>
                                                </tr>
                                                <tr>
                                                    <td>sáb.</td>
                                                    <td>06:00 - 20:00</td>
                                                    <td>12 - 15</td>
                                                </tr>
                                                <tr>
                                                    <td>dom.</td>
                                                    <td>07:00 - 20:00</td>
                                                    <td>15 - 20</td>
                                                </tr>
                                            </table>
                                            <p>La línea 109 tiene varias paradas y la duración total del viaje para esta ruta es de aproximadamente 60 minutos.</p>
                                        `;
                                        break;case 703:
            mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d37834.760768885535!2d-71.61113474010719!3d-33.05246522126611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e3!4m5!1s0x9689e6c8458148f5%3A0xf857f092d8427fc!2sLautaro%20262%2C%20Valpara%C3%ADso!3m2!1d-33.0290356!2d-71.6415839!4m3!3m2!1d-33.0659274!2d-71.5810955!5e0!3m2!1ses-419!2scl!4v1719801842396!5m2!1ses-419!2scl';
            infoContainer.innerHTML = `
                    <h3>Horarios de 703 de autobús</h3>
                    <p>La ruta de autobús 703 opera todos los días. El horario regular es: 06:10 - 22:00</p>
                    <table>
                        <tr>
                            <th>Día</th>
                            <th>Horarios de operación</th>
                            <th>Frecuencia (min)</th>
                        </tr>
                        <tr>
                            <td>lun.</td>
                            <td>06:10 - 22:00</td>
                            <td>5 - 8</td>
                        </tr>
                        <tr>
                            <td>mar.</td>
                            <td>06:10 - 22:00</td>
                            <td>5 - 8</td>
                        </tr>
                        <tr>
                            <td>mié.</td>
                            <td>06:10 - 22:00</td>
                            <td>5 - 8</td>
                        </tr>
                        <tr>
                            <td>jue.</td>
                            <td>06:10 - 22:00</td>
                            <td>5 - 8</td>
                        </tr>
                        <tr>
                            <td>vie.</td>
                            <td>06:10 - 22:00</td>
                            <td>5 - 8</td>
                        </tr>
                        <tr>
                            <td>sáb.</td>
                            <td>06:30 - 22:00</td>
                            <td>8 - 12</td>
                        </tr>
                        <tr>
                            <td>dom.</td>
                            <td>07:30 - 21:00</td>
                            <td>10 - 12</td>
                        </tr>
                    </table>
                    <p>La línea 703 tiene varias paradas y la duración total del viaje para esta ruta es de aproximadamente 60 minutos.</p>
                `;
            break;

        case 109:
            mapFrame.src = 'https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d44989.82522708226!2d-71.4402603225702!3d-33.059395172307575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e3!4m3!3m2!1d-33.026323!2d-71.6432956!4m3!3m2!1d-33.0633844!2d-71.3934637!5e0!3m2!1ses-419!2scl!4v1719800060135!5m2!1ses-419!2scl';
            infoContainer.innerHTML = `
                <h3>Horarios de 109 de autobús</h3>
                <p>La ruta de autobús 109 opera todos los días. El horario regular es: 06:00 - 21:00</p>
                <table>
                    <tr>
                        <th>Día</th>
                        <th>Horarios de operación</th>
                        <th>Frecuencia (min)</th>
                    </tr>
                    <tr>
                        <td>lun.</td>
                        <td>06:00 - 21:00</td>
                        <td>8 - 15</td>
                    </tr>
                    <tr>
                        <td>mar.</td>
                        <td>06:00 - 21:00</td>
                        <td>8 - 15</td>
                    </tr>
                    <tr>
                        <td>mié.</td>
                        <td>06:00 - 21:00</td>
                        <td>8 - 15</td>
                    </tr>
                    <tr>
                        <td>jue.</td>
                        <td>06:00 - 21:00</td>
                        <td>8 - 15</td>
                    </tr>
                    <tr>
                        <td>vie.</td>
                        <td>06:00 - 21:00</td>
                        <td>8 - 15</td>
                    </tr>
                    <tr>
                        <td>sáb.</td>
                        <td>06:00 - 20:00</td>
                        <td>12 - 15</td>
                    </tr>
                    <tr>
                        <td>dom.</td>
                        <td>07:00 - 20:00</td>
                        <td>15 - 20</td>
                    </tr>
                </table>
                <p>La línea 109 tiene varias paradas y la duración total del viaje para esta ruta es de aproximadamente 60 minutos.</p>
            `;
            break;
        // Añadir más casos para otras líneas
        default:
            mapFrame.src = '';
            infoContainer.innerHTML = ''; // Limpiar información
            break;
    }
}
