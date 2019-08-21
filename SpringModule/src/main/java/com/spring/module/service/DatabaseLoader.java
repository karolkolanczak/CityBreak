package com.spring.module.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spring.module.model.Holiday;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class DatabaseLoader implements CommandLineRunner {

    @Autowired
    private HolidayService holidayService;

    @Override
    public void run(String... args) throws Exception {

        ObjectMapper mapper = new ObjectMapper();

        List<Holiday> listOfHolidays=new ArrayList<>();

        Holiday holiday = new Holiday();

        try {
            Holiday [] arrayOfHolidays = mapper.readValue(new File("SpringModule/src/main/resources/holiday.json"), Holiday[].class);

            listOfHolidays = Arrays.asList(arrayOfHolidays);

            for(Holiday value: listOfHolidays){
                // below in order to create new id
                value.setId(0);
                if(value.getImagePath()!=null){
                    value.setImage(convertsImage(value.getImagePath()));
                }
                holidayService.saveHoliday(value);
            }

            System.out.println("---- END OK");
        } catch (IOException e) {
            System.out.println("------------------ " + e);
        }
    }

        Byte[]  convertsImage(String imagePath){
            ClassLoader classLoader = getClass().getClassLoader();
            File file = new File(classLoader.getResource(imagePath).getFile());
            Byte[] image=imageReader(file);
            return image;
        }

        public Byte[] imageReader(File file){
            byte[] fileContent = new byte[0];
            Byte[] byteObjects=new Byte[0];
            try {
                fileContent = Files.readAllBytes(file.toPath());
            } catch (IOException e) {
                e.printStackTrace();
            }
            byteObjects=primitiveBytesArrayToObjectBytesArrayConverter(fileContent);
            return byteObjects;
        }

        public Byte[] primitiveBytesArrayToObjectBytesArrayConverter(byte[] primitiveBytes){
            Byte[] byteObjects = new Byte[primitiveBytes.length];
            Arrays.setAll(byteObjects, n -> primitiveBytes[n]);
            return byteObjects;
        }
}
